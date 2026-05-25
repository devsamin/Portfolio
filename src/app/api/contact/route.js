import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateBody(body) {
  const { name, email, message } = body ?? {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { error: "Name, email, and message are required." };
  }

  if (name.trim().length > 100) {
    return { error: "Name must be 100 characters or less." };
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return { error: "Please provide a valid email address." };
  }

  if (message.trim().length > 5000) {
    return { error: "Message must be 5000 characters or less." };
  }

  return {
    data: {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    },
  };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const validation = validateBody(body);

    if (validation.error) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { name, email, message } = validation.data;
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const contactTo = process.env.CONTACT_TO_EMAIL || emailUser;

    if (!emailUser || !emailPass) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

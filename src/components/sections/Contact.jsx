"use client";

import { useState } from "react";
import { Send, Github, Linkedin, Mail, MapPin, Loader2 } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err.message || "Something went wrong. Please try again later.",
      );
    }
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (isError) {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const inputClassName =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px glow-line" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="CONTACT"
          title="Let's work together"
          description="Have a project in mind or want to discuss an opportunity? Send me a message — I'll get back to you soon."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <GlassCard className="lg:col-span-3" hover={false}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={isLoading}
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isLoading}
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClassName}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={isLoading}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClassName} resize-none`}
                />
              </div>

              {isError && errorMessage && (
                <p
                  role="alert"
                  className="text-sm text-red-400/90"
                  aria-live="polite"
                >
                  {errorMessage}
                </p>
              )}

              {isSuccess && (
                <p
                  role="status"
                  className="text-sm text-emerald-400/90"
                  aria-live="polite"
                >
                  Thank you! Your message was sent successfully.
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                className="w-full sm:w-auto"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  "Message sent!"
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </GlassCard>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <GlassCard hover={false} delay={0.1}>
              <h3 className="mb-4 font-semibold text-white">Connect</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-white"
                  >
                    <Mail size={18} className="text-accent-soft" />
                    {personalInfo.email}
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <MapPin size={18} className="text-accent-soft" />
                  {personalInfo.location}
                </li>
              </ul>
            </GlassCard>

            <GlassCard hover={false} delay={0.2}>
              <h3 className="mb-4 font-semibold text-white">Social</h3>
              <div className="flex gap-3">
                <Link
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl glass text-muted transition-colors hover:border-white/20 hover:text-white"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl glass text-muted transition-colors hover:border-white/20 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

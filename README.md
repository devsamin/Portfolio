# Abdulla Al Samin — Portfolio

Premium personal portfolio built with **Next.js (App Router)**, **React**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- JavaScript (JSX)
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Customize

Edit content in `src/data/portfolio.js`:

- Personal info, social links, email
- Projects (titles, descriptions, links)
- Skills levels
- Timeline (education & experience)

## Project Structure

```
src/
├── app/           # Layout, page, global styles
├── components/
│   ├── layout/    # Navbar, Footer, PageTransition
│   ├── sections/  # Hero, About, Projects, etc.
│   └── ui/        # Reusable UI components
└── data/          # Portfolio content
```

## Features

- Dark mode by default
- Glassmorphism + gradient accents
- Sticky blurred navbar
- Smooth scroll & Framer Motion animations
- Fully responsive
- SEO metadata in `layout.jsx`
- Contact form (UI demo — wire to API as needed)

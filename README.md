# RK Associates — Website

Official website for **RK Associates**, built with **Next.js** and modern frontend tooling. The project focuses on clean UI, performance, and scalability, with reusable components and a production-ready setup.

---

## Tech Stack

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Lucide Icons**
* **Embla Carousel**

---

## Features

* Modern, responsive UI
* Optimized images using `next/image`
* Component-based architecture
* SEO-friendly pages
* Fast load times and smooth animations
* Clean footer and layout structure

---

## Project Structure

```
.
├── app/                # App Router pages & layouts
├── components/         # Reusable UI components
├── lib/                # Utilities and helpers
├── public/             # Static assets
├── styles/             # Global styles
├── constants/          # Constants & configs
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd rk-associates
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## Build for Production

```bash
npm run build
npm start
```

---

## Environment Variables

Create a `.env.local` file if required:

```env
NEXT_PUBLIC_SITE_URL=
```

---

## Code Style & Practices

* Functional components only
* Minimal client components (`"use client"` only when needed)
* Reusable UI blocks
* Simple, readable code

---

## Deployment

The project can be deployed on:

* Vercel (recommended)
* Netlify
* Any Node.js-compatible hosting

---

## License

This project is private and intended for RK Associates internal and business use.

---

## Author

**Rajeev Bhardwaj**
Full-Stack / Frontend Developer

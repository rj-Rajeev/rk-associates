"use client";

import { Phone } from "lucide-react";

export default function FloatingContactActions() {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919675316171?text=Hello%2C%20I%20want%20to%20discuss%20a%20design%20for%20my%20project."
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all hover:scale-105 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50"
      >
        {/* WhatsApp SVG */}
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.44c-.29-.14-1.71-.84-1.97-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.16.19-.32.21-.61.07-.29-.14-1.21-.44-2.3-1.4-.85-.76-1.42-1.7-1.59-1.99-.16-.29-.02-.45.12-.59.13-.13.29-.32.43-.48.14-.16.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.02 2.83 1.16 3.02c.14.19 2.01 3.07 4.88 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34M16 3C9.38 3 4 8.38 4 15c0 2.65.87 5.1 2.34 7.08L4 29l7.14-2.28C13.06 27.56 14.5 28 16 28c6.62 0 12-5.38 12-12S22.62 3 16 3z" />
        </svg>
      </a>

      {/* Call */}
      <a
        href="tel:+919675316171"
        aria-label="Call us"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

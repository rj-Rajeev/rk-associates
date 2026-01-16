"use client";

import Image from "next/image";
import { Phone, MessageSquare } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80",
    alt: "Modern residential architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1725745815723-04abe96f8417?auto=format&fit=crop&w=2400&q=80",
    alt: "Luxury commercial building",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=80",
    alt: "Minimal interior architecture",
  },
];

export default function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <section className="relative h-[88svh] overflow-hidden">
      {/* Carousel */}
      <div ref={emblaRef} className="absolute inset-0">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay (UX FIX) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg space-y-5 text-white">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Transforming Spaces Into Timeless Architecture
            </h1>

            <p className="text-base leading-relaxed text-white/90 sm:text-lg">
              A design-led architecture studio focused on clarity,
              function, and long-lasting value.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href="tel:+919675316171"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </a>

              <a
                href="https://wa.me/919675316171"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

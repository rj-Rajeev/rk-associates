"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { Phone, MessageSquare } from "lucide-react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80",
    title: "Architecture Designed for Real Living",
    desc: "RK Associates is an architecture and design studio based in Greater Noida, focused on practical and well-planned spaces.",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=80",
    title: "Residential & Commercial Projects",
    desc: "From private homes to commercial buildings, we design with clarity, function, and long-term value.",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80",
    title: "Serving Greater Noida & NCR",
    desc: "We guide projects from concept to execution across Greater Noida and NCR.",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80",
    title: "Traditional Indian Courtyard Homes",
    desc: "Inspired by haveli-style layouts, blending open courtyards with modern living comforts.",
  },
  {
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2400&q=80",
    title: "Modern Indian Villas",
    desc: "Contemporary villas designed with Indian aesthetics, vastu principles, and sustainable materials.",
  },
  {
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2400&q=80",
    title: "Educational & Institutional Spaces",
    desc: "Designing campuses and institutions that reflect India’s cultural depth and modern aspirations.",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80",
    title: "Cultural & Heritage Projects",
    desc: "Projects inspired by Indian temples, ghats, and heritage structures, reimagined for today’s context.",
  },
];

export default function HeroCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay.current]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative h-[60vh] min-h-[460px]">
      {/* Carousel */}
      <div ref={emblaRef} className="h-full overflow-hidden touch-pan-y">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="relative flex-[0_0_100%]">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={i === 0}
                draggable={false}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* Content */}
      <div className="pointer-events-none absolute inset-0 flex items-end sm:items-center">
        <div className="container px-4 pb-10 sm:px-6 sm:pb-0">
          <div className="max-w-xl space-y-4 text-white pointer-events-auto">
            <h1 className="text-2xl font-semibold sm:text-4xl">
              {slides[index].title}
            </h1>

            <p className="text-sm text-white/90 sm:text-lg">
              {slides[index].desc}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row pt-2">
              <a
                href="tel:+919675316171"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-black"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>

              <a
                href="https://wa.me/919675316171?text=Hello%2C%20I%20want%20to%20discuss%20a%20design%20for%20my%20project."
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white px-6 py-3 text-sm font-medium text-white"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <p className="text-xs text-white/60 sm:hidden pt-2">
              Swipe to explore →
            </p>
          </div>
        </div>
      </div>

      {/* Dots indicator (centered) */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition ${
              index === i
                ? "bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

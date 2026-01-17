"use client";

import { Phone, MessageSquare, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground">
          {/* Decorative gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />

          <div className="relative grid grid-cols-1 gap-8 p-8 sm:p-12 md:grid-cols-2 md:items-center">
            {/* Content */}
            <div>
              <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                Ready to start your project?
              </h2>
              <p className="mt-3 max-w-md text-sm sm:text-base text-primary-foreground/85">
                Talk to RK Associates and get clear guidance on design,
                feasibility, and execution — before you build.
              </p>

              {/* Trust hint */}
              <p className="mt-4 text-xs text-primary-foreground/70">
                Residential • Commercial • Institutional
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              {/* Primary */}
              <a
                href="tel:+919675316171"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-primary transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>

              {/* Secondary */}
              <a
                href="https://wa.me/919675316171?text=Hello%2C%20I%20want%20to%20discuss%20a%20design%20for%20my%20project."
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
                <ArrowRight className="h-4 w-4 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

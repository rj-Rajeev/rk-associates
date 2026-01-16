"use client";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    quote:
      "RK Associates translated our ideas into a home that feels functional and refined.",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    quote:
      "Their design decisions improved how our team works every day.",
  },
  {
    name: "Emily Rodriguez",
    role: "School Principal",
    quote:
      "A thoughtful balance of creativity and practicality throughout the project.",
  },
  {
    name: "David Thompson",
    role: "Real Estate Developer",
    quote:
      "Reliable delivery, clear communication, and consistent quality.",
  },
  {
    name: "Lisa Patel",
    role: "Restaurant Owner",
    quote:
      "The space they designed elevated the entire dining experience.",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-muted/40">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Client Feedback
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Short reflections from recent clients
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Edge fade (UX hint) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-muted/40 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-muted/40 to-transparent z-10" />

          {/* Scroll Area */}
          <div
            className="
              flex gap-4 overflow-x-auto pb-2
              snap-x snap-mandatory
              no-scrollbar
            "
          >
            {TESTIMONIALS.map((t, i) => (
              <article
                key={i}
                className="
                  snap-start
                  min-w-[260px] max-w-[280px]
                  rounded-lg border bg-background p-4 text-sm
                  transition-all duration-300 ease-out
                  hover:-translate-y-0.5
                  hover:border-primary/40
                  hover:shadow-sm
                "
              >
                <p className="leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div
                    className="
                      flex h-7 w-7 items-center justify-center
                      rounded-full bg-primary/10
                      text-xs font-medium text-primary
                      transition-colors
                      group-hover:bg-primary/20
                    "
                  >
                    {t.name.charAt(0)}
                  </div>

                  <div className="leading-tight">
                    <p className="text-xs font-medium text-foreground">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {t.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

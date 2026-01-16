"use client";

import Link from "next/link";
import { Building2, PenTool, Users, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Building2,
    title: "Architectural Design",
    desc: "End-to-end architectural solutions for residential, commercial, and institutional projects.",
  },
  {
    icon: PenTool,
    title: "Interior Design",
    desc: "Thoughtfully designed interiors focused on usability, comfort, and visual balance.",
  },
  {
    icon: Users,
    title: "Project Management",
    desc: "Structured planning and execution to ensure projects stay on time and within budget.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-14 sm:py-20 bg-muted/40"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-muted-foreground">
            Clear, structured services designed to support projects from concept to completion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="group rounded-xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-medium">
                  {service.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Discuss your project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

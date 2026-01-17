"use client";

import Link from "next/link";
import {
  Building2,
  PenTool,
  Users,
  Home,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Home,
    title: "Residential Design",
    desc: "Villas, apartments, independent homes.",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    desc: "Offices, retail, mixed-use spaces.",
  },
  {
    icon: PenTool,
    title: "Interior Design",
    desc: "Functional and aesthetic interiors.",
  },
  {
    icon: Users,
    title: "Turnkey Execution",
    desc: "Design to handover, end-to-end.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-14">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Our Services
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Practical architectural solutions for Indian projects
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="group flex items-start gap-3 rounded-lg border bg-background p-4 transition hover:border-primary"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <service.icon className="h-4 w-4" />
              </div>

              <div>
                <h3 className="text-sm font-medium leading-tight">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Discuss your project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

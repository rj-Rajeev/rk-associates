"use client";

import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-14 sm:py-20 bg-muted/40"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl border bg-background p-6 sm:p-10">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Get in Touch
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-muted-foreground">
              Speak directly with our team to discuss your project,
              feasibility, and next steps.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            {/* Left: Actions + Info */}
            <div className="space-y-8">
              {/* Actions */}
              <div className="space-y-4">
                <a
                  href="tel:+919675316171"
                  className="group flex items-center justify-between rounded-xl border p-5 transition hover:border-primary hover:bg-primary/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Call Us
                      </p>
                      <p className="text-xs text-muted-foreground">
                        +91 96753 16171
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
                </a>

                <a
                  href="https://wa.me/919675316171?text=Hello%2C%20I%20want%20to%20discuss%20a%20design%20for%20my%20project."
                  target="_blank"
                  className="group flex items-center justify-between rounded-xl border p-5 transition hover:border-green-600 hover:bg-green-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-green-100 p-2 text-green-700">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        WhatsApp
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Quick response on chat
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:text-green-700" />
                </a>

                <div className="flex items-center justify-between rounded-xl border p-5">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Email
                      </p>
                      <p className="text-xs text-muted-foreground">
                        info@rkassociates.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium">
                      Office Address
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Greater Noida, Rabupura 203209
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Serving Greater Noida & NCR
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium">
                      Working Hours
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Monday – Saturday, 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                  We typically respond within a few hours during
                  working days.
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div className="w-full overflow-hidden rounded-xl border">
              <iframe
                title="RK Associates Location"
                src="https://www.google.com/maps?q=Rabupura%20Greater%20Noida%20203209&output=embed"
                className="h-64 w-full sm:h-80 lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

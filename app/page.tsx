import Link from "next/link"
import Image from "next/image"
import { Phone, MessageSquare, Building2, PenTool, Users, ArrowRight, MapPin, Mail, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroCarousel from "@/components/HeroCarousel"
import PortfolioSection from "@/components/PortfolioSection"
import ServicesSection from "@/components/ServicesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactCTA from "@/components/ContactCTA"
import ContactSection from "@/components/ContactSection"
import FloatingContactActions from "@/components/FloatingContactActions"
import ContactFooter from "@/components/Footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Building2 className="h-6 w-6" />
            <span>RK Associates</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919675316171"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <HeroCarousel/>

        {/* Services Section */}
        <ServicesSection/>

        {/* Portfolio Section */}
        <PortfolioSection/>

        {/* Testimonials Section */}
        <TestimonialsSection/>

        {/* CTA Section */}
        <ContactCTA/>

        {/* Contact Section */}
        <ContactSection/>

        {/* Floating Action Buttons */}
        <FloatingContactActions/>
      </main>
      <ContactFooter/>
    </div>
  )
}

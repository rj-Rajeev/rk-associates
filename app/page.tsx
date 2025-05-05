import Link from "next/link"
import Image from "next/image"
import { Phone, MessageSquare, Building2, PenTool, Users, ArrowRight, MapPin, Mail, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Modern architecture"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Transforming Spaces Into Extraordinary Experiences
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Award-winning architectural firm specializing in innovative design solutions that blend functionality,
                aesthetics, and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:+919675316171"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
                <a
                  href="https://wa.me/+91 9675316171"
                  className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                We offer comprehensive architectural services tailored to meet your specific needs and vision.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg transition-all hover:shadow-xl">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-fit">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Architectural Design</h3>
                  <p className="text-muted-foreground">
                    Comprehensive design services for residential, commercial, and institutional projects.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg transition-all hover:shadow-xl">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-fit">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Interior Design</h3>
                  <p className="text-muted-foreground">
                    Creating functional and aesthetically pleasing interior spaces that reflect your style.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg transition-all hover:shadow-xl">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-3 rounded-full w-fit">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Project Management</h3>
                  <p className="text-muted-foreground">
                    End-to-end project management ensuring timely delivery within budget constraints.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Link href="#contact" className="inline-flex items-center justify-center text-primary hover:underline">
                Discuss your project with us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Portfolio</h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                Explore our diverse range of projects showcasing our expertise and innovative approach.
              </p>
            </div>
            <Tabs defaultValue="residential" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="institutional">Institutional</TabsTrigger>
              </TabsList>
              <TabsContent value="residential" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="overflow-hidden rounded-lg shadow-md group">
                      <div className="relative h-64">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Project+${item}`}
                          alt={`Residential Project ${item}`}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold">Luxury Villa Design {item}</h3>
                        <p className="text-sm text-muted-foreground">
                          Modern residential project with sustainable features
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="commercial" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="overflow-hidden rounded-lg shadow-md group">
                      <div className="relative h-64">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Commercial+${item}`}
                          alt={`Commercial Project ${item}`}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold">Office Complex {item}</h3>
                        <p className="text-sm text-muted-foreground">
                          Contemporary commercial space with innovative design
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="institutional" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="overflow-hidden rounded-lg shadow-md group">
                      <div className="relative h-64">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=Institutional+${item}`}
                          alt={`Institutional Project ${item}`}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold">Educational Center {item}</h3>
                        <p className="text-sm text-muted-foreground">
                          Functional and inspiring institutional architecture
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                Hear what our clients have to say about their experience working with RK Associates.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Homeowner",
                  quote:
                    "RK Associates transformed our vision into reality. Their attention to detail and innovative approach resulted in a home that exceeds our expectations.",
                },
                {
                  name: "Michael Chen",
                  role: "Business Owner",
                  quote:
                    "Working with RK Associates on our office redesign was a seamless experience. They understood our brand and created a space that inspires creativity and productivity.",
                },
                {
                  name: "Emily Rodriguez",
                  role: "School Principal",
                  quote:
                    "The team at RK Associates designed our new educational facility with both functionality and inspiration in mind. The result is a space where students thrive.",
                },
                {
                  name: "David Thompson",
                  role: "Real Estate Developer",
                  quote:
                    "I've worked with many architectural firms, but RK Associates stands out for their professionalism, creativity, and ability to deliver on time and within budget.",
                },
                {
                  name: "Lisa Patel",
                  role: "Restaurant Owner",
                  quote:
                    "Our restaurant design by RK Associates has received countless compliments from customers. They created the perfect ambiance that complements our culinary experience.",
                },
                {
                  name: "Robert Wilson",
                  role: "Healthcare Administrator",
                  quote:
                    "RK Associates understood the unique requirements of our medical facility. Their design prioritizes patient comfort while maximizing operational efficiency.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
                        <span className="font-bold text-primary">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Project?
                </h2>
                <p className="mt-4 text-primary-foreground/90 max-w-md">
                  Contact us today to discuss how RK Associates can bring your architectural vision to life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <a
                  href="tel:+919675316171"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
                <a
                  href="https://wa.me/+91 9675316171"
                  className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
                <p className="mt-4 text-muted-foreground max-w-md">
                  Fill out the form below, and our team will get back to you within 24 hours.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Our Office</h3>
                      <p className="text-muted-foreground">Greater Noida, Rabupura 203209</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-muted-foreground">info@rkassociates.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-muted-foreground">+91 9675316171</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Working Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="project"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Project Type
                    </label>
                    <select
                      id="project"
                      defaultValue=""
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="institutional">Institutional</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          <a
            href="https://wa.me/+91 9675316171"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-colors"
            aria-label="Contact us on WhatsApp"
          >
            <MessageSquare className="h-6 w-6" />
          </a>
          <a
            href="tel:+919675316171"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
            aria-label="Call us"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </main>
      <footer className="border-t py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Building2 className="h-6 w-6" />
                <span>RK Associates</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming spaces into extraordinary experiences since 2005.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Architectural Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Interior Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Project Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Consultation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Rabupura pin: 203209 , gautam buddha nagar</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@rkassociates.com</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+91 9675316171</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} RK Associates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

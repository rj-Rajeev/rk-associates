"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const DATA = {
  residential: {
    title: "Luxury Residence",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  commercial: {
    title: "Commercial Building",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1529429611278-38f6cfa6a4c5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  institutional: {
    title: "Institutional Project",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-14 sm:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Our Portfolio
          </h2>
          <p className="mt-2 max-w-xl mx-auto text-sm text-muted-foreground">
            Selected architectural works across residential, commercial,
            and institutional spaces.
          </p>
        </div>

        <Tabs defaultValue="residential">
          <TabsList className="mx-auto mb-8 grid max-w-sm grid-cols-3">
            <TabsTrigger value="residential">Residential</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
            <TabsTrigger value="institutional">Institutional</TabsTrigger>
          </TabsList>

          {Object.entries(DATA).map(([key, value]) => (
            <TabsContent
              key={key}
              value={key}
              className="animate-fadeIn"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {value.images.map((src, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={src}
                        alt={`${value.title} ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/35" />
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-sm font-medium text-white">
                        {value.title}
                      </h3>
                      <p className="text-xs text-white/75">
                        Contemporary architecture
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

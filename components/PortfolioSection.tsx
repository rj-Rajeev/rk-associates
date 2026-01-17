"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

const DATA = {
  residential: {
    label: "Residential",
    projects: [
      {
        title: "Luxury Private Residence",
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        ],
      },
      {
        title: "Modern Family Home",
        images: [
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1600585154200-7c1a9f1a56a0?auto=format&fit=crop&w=1200&q=80",
        ],
      },
      {
        title: "Beachfront Villa",
        images: [
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
        ],
      },
    ],
  },
  commercial: {
    label: "Commercial",
    projects: [
      {
        title: "Corporate Office Building",
        images: [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1529429611278-38f6cfa6a4c5?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        ],
      },
      {
        title: "Shopping Mall Complex",
        images: [
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1529429611278-38f6cfa6a4c5?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
        ],
      },
      {
        title: "Luxury Hotel",
        images: [
          "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=1200&q=80",
        ],
      },
    ],
  },
  institutional: {
    label: "Institutional",
    projects: [
      {
        title: "Educational Campus",
        images: [
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
        ],
      },
      {
        title: "Modern Library",
        images: [
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
        ],
      },
      {
        title: "Healthcare Facility",
        images: [
          "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
        ],
      },
    ],
  },
};

export default function PortfolioSection() {
  const [active, setActive] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  const next = () => {
    if (!active) return;
    setIndex((i) => (i + 1) % active.images.length);
  };

  const prev = () => {
    if (!active) return;
    setIndex((i) => (i - 1 + active.images.length) % active.images.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) next();
    if (distance < -minSwipeDistance) prev();
  };

  return (
    <section id="portfolio" className="py-4 sm:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Our Work
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Curated architectural projects
          </p>
        </div>

        <Tabs defaultValue="residential">
          <TabsList className="mx-auto mb-6 flex w-fit flex-wrap justify-center gap-2">
            {Object.entries(DATA).map(([key, v]) => (
              <TabsTrigger key={key} value={key}>
                {v.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(DATA).map(([key, value]) => (
            <TabsContent key={key} value={key}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {value.projects.map((project, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setActive(project);
                      setIndex(0);
                    }}
                    className="group relative cursor-pointer overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-sm font-medium text-white">
                        {project.title}
                      </h3>
                    </div>

                    {/* Image count */}
                    {project.images.length > 1 && (
                      <div className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
                        <Images className="h-3 w-3" />
                        {project.images.length}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
          onClick={() => setActive(null)} // ✅ click outside closes
        >
          {/* Close button */}
          <button
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/60 p-2 text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex h-full items-center justify-center px-3 sm:px-6">
            {/* Stop propagation so inside clicks don’t close */}
            <div
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative aspect-[4/5] sm:aspect-[16/9] overflow-hidden rounded-lg"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <Image
                  src={active.images[index]}
                  alt={active.title}
                  fill
                  draggable={false}
                  className="object-cover"
                />
              </div>

              {/* Controls */}
              {active.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}

              {/* Caption */}
              <div className="mt-3 text-center text-sm text-white/80">
                {active.title} · {index + 1}/{active.images.length}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

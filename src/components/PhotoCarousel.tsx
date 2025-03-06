import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cn } from "../lib/utils";

interface PhotoCarouselProps {
  images?: Array<{
    url: string;
    alt: string;
  }>;
  autoplayInterval?: number;
  className?: string;
}

const PhotoCarousel = ({
  images = [
    {
      url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
      alt: "Conservation Agriculture Field",
    },
    {
      url: "https://images.unsplash.com/photo-1592982537447-6e202fe64811?w=1200&q=80",
      alt: "Sustainable Farming Practices",
    },
    {
      url: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=1200&q=80",
      alt: "Climate Smart Agriculture",
    },
    {
      url: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=1200&q=80",
      alt: "Soil Conservation Techniques",
    },
    {
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80",
      alt: "Sustainable Crop Rotation",
    },
  ],
  autoplayInterval = 5000,
  className,
}: PhotoCarouselProps) => {
  const [api, setApi] = React.useState<any>();

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [api, autoplayInterval]);

  return (
    <div className={cn("w-full bg-white", className)}>
      <Carousel
        setApi={setApi}
        className="w-full max-w-[1512px] mx-auto relative"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;

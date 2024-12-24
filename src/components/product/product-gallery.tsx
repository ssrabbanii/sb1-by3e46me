import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <Carousel
          opts={{ loop: true }}
          className="w-full"
          onSelect={(index) => setCurrentIndex(index)}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={4/3}>
                  <img
                    src={image}
                    alt={`Product image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
              currentIndex === index ? 'ring-2 ring-green-600' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AppTypes } from "@/type";

interface CaseItem {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const CASE_IMAGES = [
  "/image_1-block-4.png",
  "/image_2-block-4.png",
  "/image_3-block-4.png",
  "/image_4-block-4.png",
];

function CaseCard({ item }: { item: CaseItem }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-medium text-secondaryBg">{item.title}</h3>
        <h4 className="text-[28px] font-medium text-[#222222]">
          {item.subtitle}
        </h4>
        <p className="mt-3 border-l pl-5 text-textMain/80 line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function Block_4({ data }: { data: AppTypes.Data[] }) {
  const blockData = data[0]?.bloc_3;

  const cases: CaseItem[] = CASE_IMAGES.map((image, index) => ({
    image,
    title: blockData?.cases?.[index]?.category ?? "",
    subtitle: blockData?.cases?.[index]?.tagline ?? "",
    description: blockData?.cases?.[index]?.description ?? "",
  }));

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-bold text-secondaryBg">
          {blockData?.title}
        </h2>
        <a
          href="#"
          className={cn(
            "flex items-center text-gray-600",
            "hover:text-gray-900"
          )}
        >
          {blockData?.more_info}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {cases.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:basis-1/2 lg:basis-1/3 md:pl-4"
            >
              <CaseCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}

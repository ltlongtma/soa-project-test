import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getData } from "@/app/layout";

export default async function Block_1() {
  const data = await getData();

  const dataBlock_1 = data?.[0]?.bloc_1 ?? [];

  console.log("E >>>>", dataBlock_1);

  const cards = [
    {
      image: "/image_1-block-1.png",
      caseTitle: dataBlock_1?.cases?.[0]?.category,
      subtitle: dataBlock_1?.cases?.[0]?.tagline,
      description: dataBlock_1?.cases?.[0]?.description,
      buttonText: dataBlock_1?.cases?.[0]?.cta,
    },
    {
      image: "/image_2-block-1.png",
      caseTitle: dataBlock_1?.cases?.[1]?.category,
      subtitle: dataBlock_1?.cases?.[1]?.tagline,
      description: dataBlock_1?.cases?.[1]?.description,
      buttonText: dataBlock_1?.cases?.[1]?.cta,
    },
    {
      image: "/image_3-block-1.png",
      caseTitle: dataBlock_1?.cases?.[2]?.category,
      subtitle: dataBlock_1?.cases?.[2]?.tagline,
      description: dataBlock_1?.cases?.[2]?.description,
      buttonText: dataBlock_1?.cases?.[2]?.cta,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-20">
        <h2 className="text-[52px] font-semibold text-secondaryBg mb-2">
          {dataBlock_1?.title}
        </h2>
        <p className="text-2xl text-textMain font-normal">
          {dataBlock_1?.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col transform transition-all duration-300 hover:-translate-y-10 hover:shadow-xl rounded-lg overflow-hidden bg-white"
          >
            <div className="relative aspect-[4/3] mb-4 overflow-hidden">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.caseTitle}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-2 p-4">
              <h3 className="text-secondaryBg font-medium text-xl">
                {card.caseTitle}
              </h3>
              <h4 className="text-xl font-medium text-textMain">
                {card.subtitle}
              </h4>
              <p className="text-textMain/80 line-clamp-2">
                {card.description}
              </p>
              <Button variant="outline" className="mt-4 group rounded-full">
                {card.buttonText}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#0E9594]" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

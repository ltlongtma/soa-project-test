import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Block_1() {
  const cards = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xb6pj4aIerhV8Mrdxa96KU0P51Ebss.png",
      caseTitle: "Case Title",
      subtitle: "Case sous-titre",
      description: "Chaque sentier vous conduit à des panoramas époustouflants, chaque instant...",
      buttonText: "Forfait 1",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xb6pj4aIerhV8Mrdxa96KU0P51Ebss.png",
      caseTitle: "Case Title",
      subtitle: "Case sous-titre",
      description: "Chez BASIC, la pêche est une alliance entre passion et respect. Imaginez des lacs paisi...",
      buttonText: "Forfait 2",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xb6pj4aIerhV8Mrdxa96KU0P51Ebss.png",
      caseTitle: "Case Title",
      subtitle: "Case sous-titre",
      description: "BASIC vous guide à travers des territoires authentiques, où la chasse est une quête d...",
      buttonText: "Forfait 3",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#F15A2B] mb-2">TITRE BLOC 1</h2>
        <p className="text-xl text-gray-600">Sous-titre Bloc 1</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-lg overflow-hidden bg-white"
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
              <h3 className="text-[#F15A2B] font-medium">{card.caseTitle}</h3>
              <h4 className="text-xl font-semibold text-gray-800">{card.subtitle}</h4>
              <p className="text-gray-600 line-clamp-2">{card.description}</p>
              <Button variant="outline" className="mt-4 group">
                {card.buttonText}
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const cases = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vsCb7emk1inHYQFSL0zXkDqz2QNfkt.png",
    title: "Case title",
    subtitle: "Case sous-titre",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t...",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vsCb7emk1inHYQFSL0zXkDqz2QNfkt.png",
    title: "Case title",
    subtitle: "Case sous-titre",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t...",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vsCb7emk1inHYQFSL0zXkDqz2QNfkt.png",
    title: "Case title",
    subtitle: "Case sous-titre",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t...",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vsCb7emk1inHYQFSL0zXkDqz2QNfkt.png",
    title: "Case title",
    subtitle: "Case sous-titre",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t...",
  },
]

export function Block_4() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-bold text-[#FF5733]">TITRE</h2>
        <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
          En Savoir Plus
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
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-[#FF5733]">{item.title}</h3>
                  <h4 className="text-xl font-semibold text-gray-900">{item.subtitle}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  )
}


import Image from "next/image"
import { ArrowUpRight, Instagram } from "lucide-react"

export default function Block_6() {
  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zmOgGrIKkWFzWhqkkiT0JrArBsnYwt.png",
      background: "bg-[#F8D7E3]",
      alt: "Avocado on pink background",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zmOgGrIKkWFzWhqkkiT0JrArBsnYwt.png",
      background: "bg-[#D7F8E3]",
      alt: "Cherries on mint background",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zmOgGrIKkWFzWhqkkiT0JrArBsnYwt.png",
      background: "bg-[#D7E3F8]",
      alt: "Orange on blue background",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zmOgGrIKkWFzWhqkkiT0JrArBsnYwt.png",
      background: "bg-[#D7E3F8]",
      alt: "Orange slice on blue background",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <p className="text-gray-600 text-lg leading-relaxed">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially
        </p>
        <h1 className="text-[2.5rem] font-extrabold leading-tight text-[#4A2B2B]">
          IMMORTALISEZ DES MOMENTS INOUBLIABLES AVEC <span className="text-[#FF6B6B]">#BASIC</span>
        </h1>
      </div>

      {/* Featured Card */}
      <div className="bg-[#EFF6F6] rounded-[2rem] p-6 mb-8">
        <div className="bg-white rounded-[1.5rem] overflow-hidden">
          <div className="relative aspect-[16/9]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zmOgGrIKkWFzWhqkkiT0JrArBsnYwt.png"
              alt="Plate of fresh fruits and food"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-3xl font-bold">La famille</h2>
              <span className="text-xl text-gray-600">24 Sep 2024</span>
            </div>
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {galleryImages.map((image, index) => (
          <div key={index} className={`${image.background} rounded-[1.25rem] overflow-hidden`}>
            <div className="aspect-square relative">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center text-white bg-black/30 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Instagram size={18} />
                  <span className="text-sm font-medium">Anthony Durand</span>
                </div>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-center text-gray-600 text-lg">
        Consultez <span className="font-medium">@BASIC</span> et{" "}
        <span className="text-[#FF6B6B] font-medium">#BASIC</span> pour découvrir les ex périences inoubliables des
        pourvoiries et activités BASIC.
      </p>
    </div>
  )
}


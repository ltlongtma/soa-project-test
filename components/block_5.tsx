import Image from "next/image"
import { Heart, HandshakeIcon, Globe2, Settings, SmilePlus } from "lucide-react"
import type React from "react"

export default function Block_5() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Main content section */}
      <div className="grid gap-16 lg:grid-cols-2 items-start mb-24">
        <div className="space-y-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
            <span className="text-[#F15A29] block mb-2">DES EXPÉRIENCES</span>
            <span className="text-[#F15A29] block mb-2">INOUBLIABLES</span>
            <span className="text-[#F8A088] block">LOREM IPSUM TRUC</span>
          </h1>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">À Propos De BASIC</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="relative h-[600px] rounded-2xl overflow-hidden bg-[#FFE5BA]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O5YR19yitYKOJ4xOzwtUnnadSUFtBE.png"
            alt="Ice cream cone with pink ice cream on yellow background"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Values section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
        <ValueItem Icon={Heart} title="Authenticité" subtitle="Sous-titre" />
        <ValueItem Icon={HandshakeIcon} title="Respect" subtitle="Sous-titre" />
        <ValueItem Icon={Globe2} title="Diversité" subtitle="Sous-titre" />
        <ValueItem Icon={Settings} title="Personnalisation" subtitle="Sous-titre" />
        <ValueItem Icon={SmilePlus} title="Confort" subtitle="Sous-titre" />
      </div>
    </section>
  )
}

interface ValueItemProps {
  Icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
}

function ValueItem({ Icon, title, subtitle }: ValueItemProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-20 h-20 rounded-full bg-[#4CA69C] flex items-center justify-center">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  )
}


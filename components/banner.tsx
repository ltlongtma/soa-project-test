import Image from "next/image"
import { Map, MessageCircle, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Banner() {
  return (
    <div className="relative w-full">
      {/* Desktop Banner */}
      <div className="hidden lg:block relative w-full h-screen">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1AVSLHrSCGs8k8HkrqXGRa1VQDJgC7.png"
          alt="Fresh fruits banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-12 left-0 right-0">
          <div className="flex justify-center gap-24">
            <Button
              variant="ghost"
              size="icon"
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              <Map className="h-8 w-8 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              <MessageCircle className="h-8 w-8 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              <Target className="h-8 w-8 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="lg:hidden relative w-full h-[100dvh]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tITgYeU6Mqy8Ntw0mXYrRIaM1drGt3.png"
          alt="Fresh fruits banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-24 left-0 right-0">
          <div className="flex justify-center gap-16">
            <div className="flex flex-col items-center">
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <Map className="h-6 w-6 text-white" />
              </Button>
              <span className="text-white text-sm mt-2">Activité 1</span>
            </div>
            <div className="flex flex-col items-center">
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </Button>
              <span className="text-white text-sm mt-2">Activité 2</span>
            </div>
            <div className="flex flex-col items-center">
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <Target className="h-6 w-6 text-white" />
              </Button>
              <span className="text-white text-sm mt-2">Activité 3</span>
            </div>
          </div>
        </div>
        <Button
          size="icon"
          className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-[#E97B5B] hover:bg-[#E97B5B]/90"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Button>
      </div>
    </div>
  )
}


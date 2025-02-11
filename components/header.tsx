"use client"
import Link from "next/link"
import { MessageCircle, Target, Map, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#4A3B3B]/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-[#4A3B3B]">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="flex items-center text-white">
                  <span className="text-xl font-bold">LOGO SAMPLE</span>
                </Link>
                <div className="flex flex-col gap-2 text-white">
                  <Link href="#" className="text-lg">
                    Titre 1
                  </Link>
                  <Link href="#" className="text-lg">
                    Titre 2
                  </Link>
                  <Link href="#" className="text-lg">
                    Titre 3
                  </Link>
                  <Link href="#" className="text-lg">
                    Titre 4
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="text-white text-xl font-bold">
          LOGO SAMPLE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          <Link href="#" className="text-white hover:text-white/80">
            Titre 1
          </Link>
          <Link href="#" className="text-white hover:text-white/80">
            Titre 2
          </Link>
          <Link href="#" className="text-white hover:text-white/80">
            Titre 3
          </Link>
          <Link href="#" className="text-white hover:text-white/80">
            Titre 4
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hidden lg:flex">
            <Map className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hidden lg:flex">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hidden lg:flex">
            <Target className="h-5 w-5" />
          </Button>
          <Button className="hidden lg:flex bg-[#E97B5B] hover:bg-[#E97B5B]/90 text-white rounded-full px-6">
            Start
          </Button>
        </div>
      </div>
    </header>
  )
}


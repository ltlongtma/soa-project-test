"use client";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import mountainIcon from "@/public/icon/mountains.svg";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-mainBg/70 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 mx-auto relative justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white lg:text-[15px] text-[10.5px] font-bold hover:text-white/80 "
        >
          LOGO SAMPLE
        </Link>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white w-6 h-6"
              >
                <Menu className="h-20 w-20" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#4A3B3B]">
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex mx-auto lg:space-x-56  justify-center flex-1">
          <div>
            <Link href="#" className="text-white hover:text-white/80">
              Titre 1
            </Link>
          </div>

          <div className="flex lg:space-x-24">
            <Link href="#" className="text-white hover:text-white/80">
              Titre 2
            </Link>
            <Link href="#" className="text-white hover:text-white/80">
              Titre 3
            </Link>
            <Link href="#" className="text-white hover:text-white/80">
              Titre 4
            </Link>
          </div>
        </nav>

        {/* Right Icons */}
        <div className="items-center gap-5 hidden lg:flex">
          <Image
            src="/icon/moutains.svg"
            alt="Mountain Icon"
            width={24}
            height={24}
            className="hover:rotate-3 cursor-pointer"
          />

          <Image
            src="/icon/fishing.svg"
            alt="Mountain Icon"
            width={24}
            height={24}
            className="hover:rotate-3 cursor-pointer"
          />

          <Image
            src="/icon/crosshair.svg"
            alt="Mountain Icon"
            width={24}
            height={24}
            className="hover:rotate-3 cursor-pointer"
          />
          <Button className="hidden lg:flex bg-[#F2542D] text-white rounded-full px-8 relative hover:rotate-3 hover:bg-[#F2542D]/80">
            <Image
              src="/icon/move-up-right.svg"
              alt="Mountain Icon"
              width={12}
              height={12}
              className="hover:rotate-3 cursor-pointer absolute left-8"
            />
          </Button>
        </div>
      </div>
    </header>
  );
}

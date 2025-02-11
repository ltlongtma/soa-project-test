"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AppTypes } from "@/type";

interface HeaderProps {
  data: AppTypes.Data[];
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = "" }: NavLinkProps) => (
  <Link href={href} className={`text-white hover:text-white/80 ${className}`}>
    {children}
  </Link>
);

interface IconButtonProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

const IconButton = ({
  src,
  alt,
  size = 24,
  className = "",
}: IconButtonProps) => (
  <Image
    src={src}
    alt={alt}
    width={size}
    height={size}
    className={`hover:rotate-3 cursor-pointer ${className}`}
  />
);

export function Header({ data }: HeaderProps) {
  const menuItems = data?.[0]?.head_menu ?? [];

  const MobileMenu = () => (
    <div className="lg:hidden px-3">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-white w-6 h-6"
            aria-label="Open menu"
          >
            <Menu className="h-20 w-20" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-[#4A3B3B]">
          <nav className="flex flex-col gap-4">
            <NavLink href="/" className="text-xl font-bold">
              LOGO SAMPLE
            </NavLink>
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <NavLink key={item} href="#" className="text-lg">
                  {item}
                </NavLink>
              ))}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );

  const DesktopNav = () => (
    <nav className="hidden lg:flex mx-auto lg:space-x-48 justify-center flex-1">
      <NavLink href="#" className="whitespace-nowrap items-center">
        {menuItems[0]}
      </NavLink>
      <div className="flex lg:space-x-24 whitespace-nowrap items-center">
        {menuItems.slice(1, 4).map((item) => (
          <NavLink key={item} href="#">
            {item}
          </NavLink>
        ))}
      </div>
    </nav>
  );

  const RightIcons = () => (
    <div className="items-center gap-5 hidden lg:flex">
      <IconButton src="/icon/moutains.svg" alt="Mountains" />
      <IconButton src="/icon/fishing.svg" alt="Fishing" />
      <IconButton src="/icon/crosshair.svg" alt="Crosshair" />
      <Button
        className="hidden lg:flex bg-[#F2542D] text-white rounded-full px-8 relative hover:rotate-3 hover:bg-[#F2542D]/80"
        aria-label="Action button"
      >
        <IconButton
          src="/icon/move-up-right.svg"
          alt="Arrow"
          size={12}
          className="absolute left-8"
        />
      </Button>
    </div>
  );

  return (
    <header className="fixed top-0 z-50 w-full bg-mainBg/70 backdrop-blur-sm">
      <div className="container flex h-[72px] items-center px-4 mx-auto relative justify-between">
        <NavLink href="/" className="lg:text-[15px] text-[10.5px] font-bold">
          LOGO SAMPLE
        </NavLink>
        <MobileMenu />
        <DesktopNav />
        <RightIcons />
      </div>
    </header>
  );
}

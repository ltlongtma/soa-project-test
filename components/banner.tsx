import Image from "next/image";

export function Banner() {
  return (
    <div className="relative w-full">
      {/* Desktop Banner */}
      <div className="hidden lg:block relative w-full h-screen">
        <Image
          src="/image-banner.png"
          alt="Fresh fruits banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-12 left-0 right-0">
          <div className="flex justify-center gap-[360px]">
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
          </div>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="lg:hidden relative w-full h-[100dvh]">
        <Image
          src="/image-banner.png"
          alt="Fresh fruits banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-24 left-0 right-0">
          <div className="flex justify-around">
            <div className="flex flex-col items-center">
              <Image
                src="/icon/moutains.svg"
                alt="Mountain Icon"
                width={24}
                height={24}
                className="hover:rotate-3 cursor-pointer"
              />
              <span className="text-white text-sm mt-2">Activité 1</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icon/fishing.svg"
                alt="Mountain Icon"
                width={24}
                height={24}
                className="hover:rotate-3 cursor-pointer"
              />
              <span className="text-white text-sm mt-2">Activité 2</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icon/crosshair.svg"
                alt="Mountain Icon"
                width={24}
                height={24}
                className="hover:rotate-3 cursor-pointer"
              />
              <span className="text-white text-sm mt-2">Activité 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

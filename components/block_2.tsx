"use client";

import dynamic from "next/dynamic";
import { AppTypes } from "@/type";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Properly load the Map component on the client side only
const MapWithNoSSR = dynamic(() => import("@/components/map"), {
  loading: () => (
    <div className="h-[400px] w-full bg-gray-100 animate-pulse"></div>
  ),
  ssr: false,
});

export default function Block_2({ data }: { data: AppTypes.Data[] }) {
  const dataBlock_2 = data?.[0]?.bloc_2 ?? {};

  const buttonGroup = [
    {
      label: dataBlock_2?.cases?.[0] ?? "",
      icon: "/icon/moutains.svg",
    },
    {
      label: dataBlock_2?.cases?.[1] ?? "",
      icon: "/icon/fishing.svg",
    },
    {
      label: dataBlock_2?.cases?.[2] ?? "",
      icon: "/icon/crosshair.svg",
    },
  ];

  const renderSubTitle = () => {
    return buttonGroup.map((item) => (
      <Button
        variant="outline"
        className="mt-4 group rounded-full ml-2 border-textMain hover:bg-textMain hover:text-white"
        key={item.label}
      >
        <Image src={item.icon} alt={item.label} width={24} height={24} />
        {item.label}
      </Button>
    ));
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <div className="relative inline-block">
          <h2 className="text-[52px] font-semibold text-secondaryBg px-8 relative">
            <span className="absolute left-[-200px] top-1/2 w-[180px] h-[1px] bg-[#BBBBBB]"></span>
            {dataBlock_2?.title ?? ""}
            <span className="absolute right-[-200px] top-1/2 w-[180px] h-[1px] bg-[#BBBBBB]"></span>
          </h2>
        </div>
      </div>
      <div className="flex justify-center mb-10">{renderSubTitle()}</div>
      <div className="w-full rounded-lg overflow-hidden shadow-lg -z-10">
        <MapWithNoSSR center={[10.762622, 106.660172]} zoom={13} />
      </div>
    </section>
  );
}

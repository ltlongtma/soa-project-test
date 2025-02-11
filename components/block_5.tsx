import Image from "next/image";
import {
  Heart,
  HandshakeIcon,
  Globe2,
  Settings,
  SmilePlus,
} from "lucide-react";
import type React from "react";
import { AppTypes } from "@/type";

interface ValueItemProps {
  src: string;
  title: string;
  subtitle: string;
}

export default function Block_5({ data }: { data: AppTypes.Data[] }) {
  const dataBlock_5 = data?.[0]?.bloc_4 ?? {};

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Main content section */}
      <div className="grid gap-16 lg:grid-cols-2 items-start mb-24">
        <div className="space-y-12">
          <h1 className="text-5xl md:text-[32px] lg:text-[48px] font-bold leading-[1.1]">
            <span className="text-secondaryBg block mb-2">
              {dataBlock_5?.title}
            </span>
          </h1>

          <div className="space-y-6 pl-24">
            <h2 className="text-[28px] font-semibold text-gray-800">
              {dataBlock_5?.subtitle}
            </h2>
            <p className="text-textMain/60 leading-relaxed text-lg">
              {dataBlock_5?.text}
            </p>
          </div>
        </div>

        <div className="relative h-[600px] rounded-2xl overflow-hidden bg-[#FFE5BA]">
          <Image
            src="/image-block-5.png"
            alt="Ice cream cone with pink ice cream on yellow background"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Values section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
        <ValueItem
          src="/icon/icon-1.svg"
          title={dataBlock_5?.pictos?.[0]?.title}
          subtitle={dataBlock_5?.pictos?.[0]?.description}
        />
        <ValueItem
          src="/icon/icon-2.svg"
          title={dataBlock_5?.pictos?.[1]?.title}
          subtitle={dataBlock_5?.pictos?.[1]?.description}
        />
        <ValueItem
          src="/icon/icon-3.svg"
          title={dataBlock_5?.pictos?.[2]?.title}
          subtitle={dataBlock_5?.pictos?.[2]?.description}
        />
        <ValueItem
          src="/icon/icon-4.svg"
          title={dataBlock_5?.pictos?.[3]?.title}
          subtitle={dataBlock_5?.pictos?.[3]?.description}
        />
        <ValueItem
          src="/icon/icon-5.svg"
          title={dataBlock_5?.pictos?.[4]?.title}
          subtitle={dataBlock_5?.pictos?.[4]?.description}
        />
      </div>
    </section>
  );
}

function ValueItem({ src, title, subtitle }: ValueItemProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-20 h-20 rounded-full bg-[#0E9594] flex items-center justify-center">
        {/* <Icon className="w-10 h-10 text-white" /> */}
        <Image
          src={src}
          alt="Icon"
          width={40}
          height={40}
          className="hover:rotate-3 cursor-pointer"
        />
      </div>
      <h3 className="text-2xl font-medium text-textMain">{title}</h3>
      <p className="text-lg text-textMain/80 font-normal">{subtitle}</p>
    </div>
  );
}

import { Banner } from "@/components/banner";
import Block_1 from "@/components/block_1";
import Block_3 from "@/components/block_3";
import { Block_4 } from "@/components/block_4";
import Block_5 from "@/components/block_5";
import Block_6 from "@/components/block_6";
import Block_7 from "@/components/block_7";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Banner />
      <Block_1 />
      <Block_3 />
      <Block_4 />
      <Block_5 />
      <Block_6 />
      <Block_7 />
    </main>
  );
}

import { getData } from "@/app/layout";
import { Banner } from "@/components/banner";
import Block_1 from "@/components/block_1";
import Block_2 from "@/components/block_2";
import Block_3 from "@/components/block_3";
import { Block_4 } from "@/components/block_4";
import Block_5 from "@/components/block_5";
import Block_6 from "@/components/block_6";
import Block_7 from "@/components/block_7";

export default async function Home() {
  const data = await getData();

  return (
    <main className="relative overflow-hidden">
      <Banner data={data} />
      <Block_1 data={data} />
      <Block_2 data={data} />
      <Block_3 />
      <Block_4 data={data} />
      <Block_5 data={data} />
      <Block_6 data={data} />
      <Block_7 />
    </main>
  );
}

import { API_URL } from "@/api/endpoint";
import { Banner } from "@/components/banner";
import Block_1 from "@/components/block_1";
import Block_2 from "@/components/block_2";
import Block_3 from "@/components/block_3";
import { Block_4 } from "@/components/block_4";
import Block_5 from "@/components/block_5";
import Block_6 from "@/components/block_6";
import Block_7 from "@/components/block_7";
import { AppTypes } from "@/type";

export async function getData({
  lang,
}: {
  lang: string;
}): Promise<AppTypes.Data[]> {
  try {
    const response = await fetch(`${API_URL.GET_ALL_PAGES}?lang=${lang}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return empty array instead of throwing to prevent app crash
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: { lang: string };
}) {
  const data = await getData({ lang: searchParams.lang });

  return (
    <main className="relative overflow-hidden">
      <Banner data={data} />
      <Block_1 data={data} />
      <Block_2 data={data} />
      <Block_3 />
      <Block_4 data={data} />
      <Block_5 data={data} />
      <Block_6 data={data} />
      <Block_7 data={data} />
    </main>
  );
}

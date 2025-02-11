import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { API_URL } from "@/api/endpoint";
import { AppTypes } from "@/type";

export async function getData(): Promise<AppTypes.Data[]> {
  try {
    console.log('Fetching data from:', `${API_URL.GET_ALL_PAGES}?lang=en`);
    const response = await fetch(`${API_URL.GET_ALL_PAGES}?lang=en`);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Data received:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];  // Return empty array instead of throwing to prevent app crash
  }
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Luu tu Long | Project | Test",
  description: "Project by Luu Tu Long",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header data={await getData()} />
        {children}
        <Image
          src="/chat-icon.png"
          alt="Chat Icon"
          width={24}
          height={24}
          className="fixed md:top-[90%] top-[93%] right-6 w-14 h-14 cursor-pointer"
        />
        <Footer />
      </body>
    </html>
  );
}

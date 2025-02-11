import { Button } from "@/components/ui/button";

export default function Block_7() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/image-block-7.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <h1 className="text-[#4A2B2B] text-5xl font-bold mb-2">
          Explorez Avec BASIC
        </h1>
        <h2 className="text-[#8A7E7E] text-4xl font-medium mb-6">
          Dès Aujourd'hui
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <Button className="bg-secondaryBg hover:bg-[#FF5B5B] text-white px-8 py-2 rounded-full text-lg">
          Explorer
        </Button>
      </div>
    </div>
  );
}

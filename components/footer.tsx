import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const renderSocialLinks = () => {
    return (
      <div className="flex items-center gap-3 justify-center relative bottom-12 md:bottom-0 ">
        <Link href="#" className="flex h-8 w-8 items-center justify-center">
          <Image
            src="/facebook.png"
            alt="Facebook Icon"
            width={24}
            height={24}
            className="hover:rotate-3 cursor-pointer"
          />
        </Link>
        <Link href="#" className="flex h-8 w-8 items-center justify-center">
          <Image
            src="/instagram.png"
            alt="Instagram Icon"
            width={24}
            height={24}
            className="hover:rotate-3 cursor-pointer"
          />
        </Link>{" "}
        <Link href="#" className="flex h-8 w-8 items-center justify-center">
          <Image
            src="/youtube.png"
            alt="Youtube Icon"
            width={24}
            height={24}
            className="hover:rotate-3 cursor-pointer"
          />
        </Link>
      </div>
    );
  };
  return (
    <footer className="bg-mainBg text-white text-lg pb-10">
      <div className="container mx-auto px-4">
        <div className="py-16">
          <div className="md:flex justify-between gap-8 text-center md:text-left">
            {/* Company Info */}
            <div className="space-y-1 font-normal">
              <h2>BASIC</h2>
              <p>(514) 904-6789</p>
              <p>Quebec, 3100 Boulevard de la Côte-Vertu</p>
            </div>

            {/* Activities */}
            <div className="">
              <ul className="md:space-y-2 space-y-4">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Activité 1
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Activité 2
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Activité 3
                  </Link>
                </li>
              </ul>
            </div>

            {/* Titles */}
            <div className="">
              <ul className="md:space-y-2 space-y-4 mt-3 md:mt-0">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Titre 1
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Titre 2
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Titre 3
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Links */}
            <div className="">
              <ul className="md:space-y-2 text-center space-y-4 mt-3 md:mt-0">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Nous contacter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}

        {/* Separator Line */}
        <div className="ml-[25%] w-[75%] top-3 md:top-0 relative">
          <div className="h-px bg-gray-600/50" />
        </div>

        {/* Bottom Bar */}
        <div className="md:flex flex-row-reverse items-center justify-between md:py-6 relative">
          {renderSocialLinks()}

          <p className="text-center">© BASIC 2024</p>
        </div>
      </div>
    </footer>
  );
}

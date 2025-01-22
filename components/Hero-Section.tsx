// React/Next
import Image from "next/image";

// Sanity
import { client } from "../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { HERO_QUERY } from "../sanity/lib/queries";
import { HERO_QUERYResult } from "@/sanity.types";

const options = { next: { revalidate: 30 } };
export default async function HeroSection() {
  const data: HERO_QUERYResult = await client.fetch(HERO_QUERY, {}, options);
  const heroData = data[0];
  return (
    <div className="relative flex items-center justify-center h-screen">
      <Image
        src={
          heroData.image ? urlFor(heroData.image).url() : "/hero-section.jgp"
        }
        alt={heroData.image?.alt || "Hero Image"}
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 z-0 filter brightness-50"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>{" "} */}
      {/* Gradient Overlay */}
      <div className="mx-auto max-w-4xl w-full relative">
        <div className="relative px-10 md:px-4 h-[350px]">
          <div className="flex flex-col justify-center md:flex-row gap-8 md:gap-16 h-full">
            {/* Left Column: Mission Statement and Title */}
            <div className="md:w-2/3 text-center md:text-left md:gap-y-52">
              <h1 className="text-white font-bold tracking-tight text-7xl">
                {heroData.title}
              </h1>
              <p className="text-yellow-300 text-md xl:text-lg md:hidden">
                {heroData.missionStatement}
              </p>
            </div>

            {/* Right Column: Additional Text */}
            <div className="md:w-1/3 self-center">
              <p className="my-6 text-lg lg:text-xl font-medium text-center md:text-left text-white md:border-l-4 md:border-primary md:pl-4">
                {heroData.additionalText}
              </p>
            </div>
          </div>

          <div className="md:flex md:justify-center hidden">
            <p className="text-yellow-300 text-md xl:text-lg">
              {heroData.missionStatement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// React/NextJS
import { Fragment } from "react";
import Image from "next/image";

// UI
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TwoColumnLayout from "@/components/TwoColumn";
import ProtonMail from "@/components/ProtonMail";

// Sanity
import { client } from "../../sanity/lib/client";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { ABOUT_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

const options = { next: { revalidate: 30 } };

export default async function AboutUs() {
  const data: ABOUT_QUERYResult = await client.fetch(ABOUT_QUERY, {}, options);
  const heroData = data.find(
    (item) => item._id === "120fa5e3-cd00-446a-9956-01c86afa4912"
  );

  const sectionData = data.filter(
    (item) => item._id !== "120fa5e3-cd00-446a-9956-01c86afa4912"
  );

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center pt-16 p-4 overflow-hidden">
        {/* Background Image */}
        <Image
          src={
            heroData?.imageSrc
              ? urlFor(heroData.imageSrc).url()
              : "/hero-section.jpg"
          }
          alt={heroData?.imageSrc?.alt ?? "Hero Image"}
          layout="fill"
          style={{ objectFit: "cover" }}
          quality={100}
          className="absolute inset-0"
        />
        {/* Overlay for darker background */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Card Component with Content */}
        <Card className="relative max-w-xs sm:max-w-sm md:max-w-lg w-full bg-white shadow-xl my-16 md:my-12 p-6">
          <CardHeader className="px-0 py-4">
            <CardTitle className="text-center text-xl">
              {heroData?.title ?? "Getting started is the hardest part"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 px-0 pb-0 font-medium leading-8">
            <p className="italic">{heroData?.InspirationalQuote}</p>
            <div>
              <PortableText value={heroData?.description || []} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white bg-dot-black/[0.2] relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
        <div className="container mx-auto py-2 px-4 max-w-5xl">
          {sectionData.map((section, idx) => (
            <TwoColumnLayout
              key={idx}
              item={{
                title: section.title ?? "Default Title",
                body: section.description?.map((desc) => ({
                  children: desc.children?.map((child) => ({
                    text: child.text ?? "Default Description",
                  })) ?? [{ text: "Default Description" }],
                })) ?? [{ children: [{ text: "Default Description" }] }],
                socialAltText: "Featured content",
                image:
                  section.imageSrc && section.imageSrc.asset
                    ? { asset: { _ref: section.imageSrc.asset._ref } }
                    : { asset: { _ref: "default_ref" } },
              }}
              imageLeft={section.imageLeft ?? false}
              longImageOnDesktop={true}
            />
          ))}
        </div>
        <ProtonMail />
      </div>
    </>
  );
}

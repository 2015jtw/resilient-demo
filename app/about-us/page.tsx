// React/NextJS
import { Fragment } from "react";
import Image from "next/image";

// UI
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TwoColumnLayout from "@/components/TwoColumn";
import ClientForm from "@/components/ClientForm";

// Sanity
import { client } from "../../sanity/lib/client";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { ABOUT_QUERYResult } from "@/sanity.types";

const options = { next: { revalidate: 30 } };

export default async function AboutUs() {
  const data: ABOUT_QUERYResult = await client.fetch(ABOUT_QUERY, {}, options);
  const heroData = data.find(
    (item) => item.title === "Getting started is the hardest part"
  );

  console.log("data", heroData);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center pt-16 p-4 overflow-hidden">
        {/* Background Image */}
        <Image
          src={urlFor(heroData?.image).url() ?? "/hero-section.jpg"}
          alt={heroData?.image?.alt ?? "Hero Image"}
          layout="fill"
          objectFit="cover"
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
            <p className="italic"></p>
            <p>
              Resilient, LLC maintains a network of subject matter experts
              across a wide spectrum of domains related to crises. We strive to
              provide appropriate recommendations for the resources that may be
              required in better preparing your organization, regardless of the
              current environment, whether that be blue skies or in the midst of
              a hurricane. We invite you to explore this site to gain our
              perspectives on the crisis leadership landscape and how we might
              guide you through the improvement process.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white bg-dot-black/[0.2] relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
        <div className="container mx-auto py-2 px-4 max-w-5xl">
          {data.map((section, idx) => (
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
      </div>
      <ClientForm />
    </>
  );
}

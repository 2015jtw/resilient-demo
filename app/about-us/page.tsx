import { Fragment } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TwoColumnLayout from "@/components/TwoColumn";
import Image from "next/image";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import { urlFor } from "@/sanity/client";
import ClientForm from "@/components/ClientForm";

const CONTENT_QUERY = `*[_type == "contentSection"]{
  title,
  description,
  imageSrc,
  imageLeft,
}`;
const HERO_QUERY = `*[_type == "heroSection"]{
  title,
  description,
  backgroundImageUrl,
}`;
const options = { next: { revalidate: 30 } };

export default async function AboutUs() {
  const contentData = await client.fetch<SanityDocument[]>(
    CONTENT_QUERY,
    {},
    options
  );

  const heroData = await client.fetch<SanityDocument[]>(
    HERO_QUERY,
    {},
    options
  );

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center pt-16 p-4 overflow-hidden">
        {/* Background Image */}
        <Image
          src={urlFor(heroData[0].backgroundImageUrl).url()}
          alt="Background image"
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
              {heroData[0].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 px-0 pb-0">
            {heroData[0].description.map((paragraph: string, index: number) => (
              <p
                key={index}
                className={`font-medium leading-8 ${
                  index === 0 ? "italic" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto my-12 px-4 max-w-5xl py-6">
        {contentData.map((section, idx) => (
          <TwoColumnLayout
            key={idx}
            item={{
              title: section.title,
              body: section.description,
              socialAltText: "Featured content",
              image: section.imageSrc,
            }}
            imageLeft={section.imageLeft}
          />
        ))}
      </div>
      <ClientForm />
    </>
  );
}

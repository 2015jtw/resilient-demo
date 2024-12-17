import { Fragment } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TwoColumnLayout from "@/components/TwoColumn";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import ClientForm from "@/components/ClientForm";
import { ABOUT_QUERY } from "@/sanity/lib/queries";

export default async function AboutUs() {
  const data = await client.fetch(ABOUT_QUERY);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center pt-16 p-4 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/assessments.jpeg"
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
              Getting started is the hardest part
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 px-0 pb-0 font-medium leading-8">
            <p className="italic">
              The most successful people don&apos;t look back to see who&apos;s
              watching. Look for opportunities to lift others up along the way.
            </p>
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

      <div className="container mx-auto my-12 px-4 max-w-5xl py-6">
        {data.map((section, idx) => (
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

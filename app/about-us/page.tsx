// React/NextJS
import Image from "next/image";

// UI
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import TwoColumnLayout from "@/components/TwoColumn";
import ClientForm from "@/components/ClientForm";

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
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={
              heroData?.imageSrc
                ? urlFor(heroData.imageSrc).url()
                : "/hero-section.jpg"
            }
            alt={heroData?.imageSrc?.alt ?? "Hero Image"}
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            className="brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>

        <Card className="relative w-full max-w-5xl bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-2xl border border-white/40">
          <CardHeader className="px-8 py-10 text-center space-y-6">
            <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              {heroData?.title ?? "Getting started is the hardest part"}
            </CardTitle>
            {heroData?.InspirationalQuote && (
              <CardDescription className="text-lg sm:text-xl text-gray-700 italic border-l-4 border-primary pl-6 mx-auto max-w-2xl">
                &quot;{heroData.InspirationalQuote}&quot;
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="px-8 pb-10">
            <div className="prose prose-lg max-w-none text-gray-700">
              <PortableText
                value={heroData?.description || []}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-lg leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Content Sections */}
      <section className="bg-white bg-dot-black/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>

        <div className="container mx-auto py-20 px-4 lg:px-8 max-w-6xl relative">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              About Us
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
              Our Story
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Building resilient organizations through comprehensive crisis
              readiness, response, and recovery support.
            </p>
            <div className="mt-6 h-1 w-24 bg-primary mx-auto" />
          </div>

          <div className="space-y-0 divide-y divide-gray-100">
            {sectionData.map((section, idx) => (
              <div
                key={idx}
                className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} py-12 transition-colors`}
              >
                <TwoColumnLayout
                  item={{
                    title: section.title ?? "Default Title",
                    body: section.description?.map((desc) => ({
                      children:
                        desc.children?.map((child) => ({
                          text: child.text ?? "Default Description",
                        })) ?? [{ text: "Default Description" }],
                    })) ?? [{ children: [{ text: "Default Description" }] }],
                    socialAltText: section.imageSrc?.alt ?? "Featured content",
                    image:
                      section.imageSrc && section.imageSrc.asset
                        ? { asset: { _ref: section.imageSrc.asset._ref } }
                        : { asset: { _ref: "default_ref" } },
                  }}
                  imageLeft={section.imageLeft ?? false}
                  longImageOnDesktop
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ClientForm />
    </>
  );
}

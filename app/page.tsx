// next/react
import { Fragment } from "react";

// UI
import AboutSection from "@/components/About";
import HeroSection from "@/components/Hero-Section";
import ClientForm from "@/components/ClientForm";
import TwoColumnLayout from "@/components/TwoColumn";

// Sanity
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import { SERVICES_QUERYResult } from "@/sanity.types";
import { client } from "../sanity/lib/client";
import { DotBackground } from "@/components/DotBackground";

export default async function Home() {
  const data: SERVICES_QUERYResult = await client.fetch(SERVICES_QUERY);

  return (
    <>
      <HeroSection />

      <div className="bg-white">
        <h2 className="text-center text-4xl py-8 lg:py-12">Our Services</h2>
        <div className="flex flex-col gap-30 w-full container mx-auto">
          {data &&
            data.map((service, idx) => (
              <div className="p-4" key={idx}>
                <TwoColumnLayout
                  item={{
                    title: service.title ?? "Service",
                    body:
                      service.body?.map((block) => ({
                        children:
                          block.children?.map((child) => ({
                            text: child.text ?? "",
                          })) ?? [],
                      })) ?? [],
                    button_text: service.button_text ?? "Learn More",
                    button_link: service.button_link ?? "#",
                    socialAltText: service.socialAltText ?? "Image of Service",
                    image:
                      service.image && service.image.asset
                        ? { asset: { _ref: service.image.asset._ref } }
                        : { asset: { _ref: "" } },
                  }}
                  imageLeft={idx % 2 === 0}
                />
              </div>
            ))}
        </div>

        <DotBackground>
          <AboutSection />
        </DotBackground>
        <ClientForm />
      </div>
    </>
  );
}

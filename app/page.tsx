// UI
import AboutSection from "@/components/About";
import HeroSection from "@/components/Hero-Section";
import TwoColumnLayout from "@/components/TwoColumn";
import Affiliations from "@/components/Affiliations";
import ClientForm from "@/components/ClientForm";

// Sanity
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import { SERVICES_QUERYResult } from "@/sanity.types";
import { client } from "../sanity/lib/client";

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const data: SERVICES_QUERYResult = await client.fetch(
    SERVICES_QUERY,
    {},
    options
  );

  return (
    <>
      <HeroSection />

      <div className="bg-white bg-dot-black/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>

        {/* Services Section */}
        <section className="relative">
          <div className="container mx-auto px-4 pt-20 pb-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>   
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive crisis management solutions tailored to your
                organization&apos;s needs
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full">
            {data &&
              data.map((service, idx) => (
                <div
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                >
                  <TwoColumnLayout
                    item={{
                      title: service.title ?? "Service",
                      body: Array.isArray(service.homepageContent)
                        ? service.homepageContent.map((content) => ({
                            children:
                              "children" in content &&
                              Array.isArray(content.children)
                                ? content.children.map((child) => ({
                                    text: child.text ?? "",
                                  }))
                                : [],
                          }))
                        : [{ children: [{ text: "Content" }] }],
                      button_text: "Learn More",
                      button_link: `/business-services/${service.slug?.current}`,
                      socialAltText:
                        service.homepageImage?.alt ?? "Image of Service",
                      image:
                        service.homepageImage && service.homepageImage.asset
                          ? { asset: { _ref: service.homepageImage.asset._ref } }
                          : { asset: { _ref: "" } },
                    }}
                    imageLeft={idx % 2 === 0}
                  />
                </div>
              ))}
          </div>
        </section>

        <AboutSection />
        <Affiliations />
        <ClientForm />
      </div>
    </>
  );
}

import AboutSection from "@/components/About";
import HeroSection from "@/components/Hero-Section";
import ClientForm from "@/components/ClientForm";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import TwoColumnLayout from "@/components/TwoColumn";

const SERVICES_QUERY = `*[_type == "homeServices"]{
  title,
  body,
  image,
  button_text,
  button_link,
  socialAltText
}`;
const options = { next: { revalidate: 30 } };

export default async function Home() {
  const data = await client.fetch<SanityDocument[]>(
    SERVICES_QUERY,
    {},
    options
  );

  return (
    <>
      <HeroSection />

      <div className="bg-white">
        <h2 className="text-center text-4xl py-12">Our Services</h2>
        <div className="flex flex-col gap-30 w-full container mx-auto">
          {data.map((service, idx) => (
            <div className="p-4" key={idx}>
              <TwoColumnLayout
                item={{
                  title: service.title,
                  body: service.body,
                  button_text: service.button_text,
                  button_link: service.button_link,
                  socialAltText: service.socialAltText,
                  image: service.image,
                }}
                imageLeft={idx % 2 === 0}
              />
            </div>
          ))}
        </div>

        <AboutSection />
        <ClientForm />
      </div>
    </>
  );
}

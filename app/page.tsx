import AboutSection from "@/components/About";
import HeroSection from "@/components/Hero-Section";
import ClientForm from "@/components/ClientForm";
import { client } from "@/sanity/client";
import Image from "next/image";
import { urlFor } from "@/sanity/client";

import { type SanityDocument } from "next-sanity";
import { Fragment } from "react";
import TwoColumnLayout from "@/components/TwoColumn";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  // console.log(data);

  return (
    <>
      <HeroSection />

      <div className="bg-white">
        <h2 className="text-center text-4xl py-8 lg:py-12">Our Services</h2>
        <div className="flex flex-col gap-30 w-full container mx-auto">
          {data.map((service, idx) => (
            <div className="p-4" key={idx}>
              <TwoColumnLayout
                className="hidden md:block"
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
              <Card className="w-full max-w-md mx-auto md:hidden">
                <CardHeader>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Image
                    src={urlFor(service.image).url()}
                    alt={service.socialAltText}
                    className="w-full aspect-video overflow-hidden rounded-xl object-cover object-center"
                    width={400}
                    height={225}
                  />
                  <p className="text-gray-500 dark:text-gray-400">
                    {service.body.map((block, index) => (
                      <Fragment key={index}>
                        {block.children.map((child, childIndex) => (
                          <span key={childIndex}>{child.text} </span>
                        ))}
                      </Fragment>
                    ))}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href={service.button_link}>{service.button_text}</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <AboutSection />
        <ClientForm />
      </div>
    </>
  );
}

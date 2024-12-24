// React/Next
import Image from "next/image";
import Fragment from "react";

// UI
import { Button } from "@/components/ui/button";
import Link from "next/link";
// Sanity
import { SINGLE_SERVICE_PAGE_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

const ServiceHero = ({
  service,
}: {
  service: SINGLE_SERVICE_PAGE_QUERYResult;
}) => {
  console.log("service", service);
  return (
    <>
      {/* Image Section */}
      <div className="relative isolate flex items-center justify-center h-[740px]">
        <Image
          src={
            service && service.heroImage ? urlFor(service.heroImage).url() : ""
          }
          alt={(service && service.heroImage?.alt) || "Service Hero Image"}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="mx-auto max-w-4xl w-full relative">
          <div className="relative mx-auto px-10 md:px-0 max-w-2xl">
            <div className="text-center">
              <h1 className="text-3xl font-light tracking-tight text-accent sm:text-6xl">
                {service && service.heroText}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Service Description */}
      <div className="pt-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-0">
          {/* Intro section */}
          <div className="mb-10">
            <p className="text-lg font-medium leading-8">
              {service && service.intro}
            </p>
          </div>

          {/* Approach Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-medium pb-4">Our Approach</h2>
            <PortableText
              value={service?.approach || []}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-lg pb-4">{children}</p>
                  ),
                },
              }}
            />
          </div>

          {/* Key Elements Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-medium pb-4">Key Elements</h2>
            <ul className="space-y-4 list-disc pl-6">
              <PortableText
                value={service?.keyElements || []}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <li className="mt-2 text-lg">
                        <strong className="font-semibold">
                          {Array.isArray(children) && children[0]}:{" "}
                        </strong>
                        :{" "}
                        <span className="">
                          {Array.isArray(children)
                            ? children.slice(1)
                            : children}
                        </span>
                      </li>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="space-y-4 list-disc pl-6">{children}</ul>
                    ),
                  },
                }}
              />
            </ul>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-3xl py-8 px-6 lg:px-0">
            <h2 className="text-3xl font-medium pb-4">Why Choose Us</h2>
            <PortableText
              value={service?.chooseUs || []}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mb-4 text-lg">{children}</p>
                  ),
                },
              }}
            />
            <p className="italic">{service && service.hook}</p>
            <Link href="/#contact-form" passHref>
              <Button variant={"secondary"} className="my-4">
                <a className="underline-offset-4 hover:underline">
                  Get Started
                </a>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHero;

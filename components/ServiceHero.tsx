// React/Next
import Image from "next/image";

// UI
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Sanity
import { SINGLE_SERVICE_PAGE_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

const ServiceHero = ({
  service,
}: {
  service: SINGLE_SERVICE_PAGE_QUERYResult;
}) => {
  return (
    <>
      {/* Hero Image Section with Improved Text Visibility */}
      <div className="bg-white bg-dot-black/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>

        <div className="relative isolate flex items-center justify-center min-h-[600px] lg:min-h-[700px]">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={
                service && service.heroImage
                  ? urlFor(service.heroImage).url()
                  : ""
              }
              alt={(service && service.heroImage?.alt) || "Service Hero Image"}
              fill
              style={{ objectFit: "cover" }}
              className="brightness-50"
            />
            {/* Gradient Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          </div>

          {/* Hero Text Content */}
          <div className="mx-auto max-w-7xl w-full relative z-10 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white drop-shadow-2xl mb-6">
                {service && service.heroText}
              </h1>
              <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-light max-w-3xl mx-auto drop-shadow-lg">
                {service && service.intro}
              </p>
              <Link href="/#contact-form" className="inline-block mt-8">
                <Button size="lg" className="text-base h-12 px-8 shadow-xl">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Service Description */}
        <div className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {/* Approach Section */}
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Approach
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <PortableText
                  value={service?.approach || []}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="text-lg mb-4 leading-relaxed">{children}</p>
                      ),
                    },
                  }}
                />
              </div>
            </div>

            {/* Key Elements Section */}
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Key Elements
              </h2>
              <div className="space-y-6">
                <PortableText
                  value={service?.keyElements || []}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary/50 transition-colors">
                          <div className="flex-shrink-0 w-2 bg-primary rounded-full"></div>
                          <div className="text-base lg:text-lg text-gray-700 leading-relaxed">
                            {children}
                          </div>
                        </div>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="space-y-6">{children}</ul>
                      ),
                    },
                  }}
                />
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <div className="mx-auto max-w-4xl py-16 lg:py-20 px-6 lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Why Choose Us
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <PortableText
                  value={service?.chooseUs || []}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="mb-6 text-lg leading-relaxed text-primary-foreground/95">
                          {children}
                        </p>
                      ),
                    },
                  }}
                />
              </div>
              {service && service.hook && (
                <p className="text-xl italic font-light mt-8 mb-8 text-primary-foreground/90">
                  {service.hook}
                </p>
              )}
              <Link href="/#contact-form">
                <Button
                  variant="secondary"
                  size="lg"
                  className="h-12 px-8 text-base font-semibold"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHero;

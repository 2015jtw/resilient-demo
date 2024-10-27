import Image from "next/image";
import { Button } from "@/components/ui/button";
import Fragment from "react";

interface KeyElement {
  title: string;
  description: string;
}

interface Service {
  imageSrc: string;
  title: string;
  intro: string;
  approach: string[];
  keyElements: KeyElement[];
  chooseUs: string[];
  hook: string;
}

interface ServiceHeroProps {
  service: Service;
}

const ServiceHero = ({ service }: ServiceHeroProps) => {
  return (
    <>
      {/* Image Section */}
      <div className="relative isolate flex items-center justify-center h-[740px]">
        <Image
          src={service.imageSrc}
          alt={service.title}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="mx-auto max-w-4xl w-full relative">
          <div className="relative mx-auto px-10 md:px-0 max-w-2xl">
            <div className="text-center">
              <h1 className="text-3xl font-light tracking-tight text-accent sm:text-6xl">
                {service.title}
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
            <p className="text-lg font-medium leading-8">{service.intro}</p>
          </div>

          {/* Approach Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-medium pb-4">Our Approach</h2>

            {service.approach.map((point, index) => (
              <p key={index} className="text-lg pb-4">
                {point}
              </p>
            ))}
          </div>

          {/* Key Elements Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-medium pb-4">Key Elements</h2>
            <ul className="space-y-4 list-disc pl-6">
              {service.keyElements.map((element, index) => (
                <li key={index}>
                  <strong className="text-lg font-semibold">
                    {element.title}:{" "}
                  </strong>
                  <span className="mt-2 text-lg">{element.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-3xl py-8 px-6 lg:px-0">
            <h2 className="text-3xl font-medium pb-4">Why Choose Us</h2>

            {service.chooseUs.map((point, index) => (
              <p key={index} className="mb-4 text-lg">
                {point}
              </p>
            ))}
            <p className="italic">{service.hook}</p>
            <Button variant={"secondary"} className="my-4">
              <a className="underline-offset-4 hover:underline">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHero;

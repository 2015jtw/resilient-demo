import Image from "next/image";
import { Button } from "@/components/ui/button";

interface KeyElement {
  title: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  image: string;
  cta: string;
  approach: string;
  keyElements: KeyElement[];
  whyChooseUs: string;
  conclusion: string;
  hook: string;
  link: string;
}

interface ServiceHeroProps {
  service: Service;
}

const ServiceHero = ({ service }: ServiceHeroProps) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative isolate flex items-center justify-center h-[740px]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="mx-auto max-w-4xl w-full relative z-10">
          <div className="relative mx-auto px-10 md:px-0 max-w-2xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-accent sm:text-6xl">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Service Description */}
      <div className="mx-auto max-w-3xl py-12 px-6 lg:px-0">
        <div className="mb-10">
          <p className="text-lg font-medium leading-8">{service.description}</p>
        </div>

        {/* Introduction Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-primary">Our Approach</h2>
          <p className="mt-4 text-lg">{service.approach}</p>
        </div>

        {/* Key Elements Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-primary">Key Elements</h2>
          <ul className="mt-4 space-y-4 list-disc pl-6">
            {service.keyElements.map((element, index) => (
              <li key={index}>
                <strong className="text-xl">{element.title}: </strong>
                <span className="mt-2 text-lg">{element.description}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">Why Choose Us</h2>
          <p className="mt-4 text-lg">{service.whyChooseUs}</p>
          <p>{service.conclusion}</p>
          <p>{service.hook}</p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button>
            <a
              href={service.link}
              className="underline-offset-4 hover:underline"
            >
              {service.cta}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;

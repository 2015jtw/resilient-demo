// components/ServiceHero.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  description: string;
  image: string;
  cta: string;
}

interface ServiceHeroProps {
  service: Service;
}

const ServiceHero = ({ service }: ServiceHeroProps) => {
  return (
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
            <p className="my-6 text-lg font-medium leading-8 text-white">
              {service.description}
            </p>
            <Button>{service.cta}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;

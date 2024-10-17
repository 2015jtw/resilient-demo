import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative isolate flex items-center justify-center h-[740px]">
      <Image
        src="/images/hero-section.jpg"
        alt="forest"
        fill
        objectFit="cover"
      />
      <div className="mx-auto max-w-4xl w-full relative z-10">
        <div className="relative mx-auto px-10 md:px-0 max-w-2xl">
          <div className="text-center">
            <p className="text-sm text-white">
              Our overarching mission is to help strengthen your capabilities.
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-accent sm:text-6xl">
              Resilient LLC
            </h1>
            <p className="my-6 text-lg font-medium leading-8 text-white">
              The COVID-19 pandemic was a wake-up call to leadership that
              preparedness matters.
            </p>
            <Button>
              <Link href="#" className="underline-offset-4 hover:underline">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

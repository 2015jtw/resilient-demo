import Image from "next/image";

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
        <div className="relative mx-auto px-10 md:px-4 max-w-5xl h-[500px]">
          <div className="flex flex-col justify-center md:flex-row gap-8 md:gap-16 h-full">
            {/* Left Column: Mission Statement and Title */}
            <div className="md:w-2/3 text-center md:text-left flex flex-col justify-center md:gap-y-80">
              <h1 className="text-amber-300 text-4xl leading-10 font-bold tracking-tight sm:text-6xl">
                Resilient LLC
              </h1>
              <p className="text-amber-300 text-sm sm:text-md leading-8">
                Our overarching mission is to help strengthen your capabilities.
              </p>
            </div>

            {/* Right Column: Additional Text */}
            <div className="md:w-1/3 text-center md:text-left self-center">
              <p className="my-6 text-lg font-medium leading-8 text-white border-l-4 border-primary pl-4">
                The COVID-19 pandemic was a wake-up call to leadership that
                preparedness matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

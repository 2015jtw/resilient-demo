import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ContentItem {
  title: string;
  description: string | string[];
  buttonText?: string;
  imageAlt: string;
  imageSrc: string;
}

interface TwoColumnLayoutProps {
  item?: ContentItem;
  imageLeft?: boolean;
}

const TwoColumnLayout = ({
  item = {
    title: "Compelling Headline Here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Get Started",
    imageAlt: "Featured content",
    imageSrc: "/images/about-1.jpg",
  },
  imageLeft = false,
}: TwoColumnLayoutProps) => {
  const descriptionContent = Array.isArray(item.description) ? (
    item.description.map((paragraph, i) => (
      <p key={i} className="text-lg text-gray-600 leading-8">
        {paragraph}
      </p>
    ))
  ) : (
    <p className="text-lg text-gray-600 leading-8">{item.description}</p>
  );

  const ContentSection = (
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-4xl font-bold text-gray-900">{item.title}</h2>
      <div className="space-y-4">{descriptionContent}</div>
      {item.buttonText && (
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          {item.buttonText}
        </Button>
      )}
    </div>
  );

  const ImageSection = (
    <div className="w-full md:w-1/2 ">
      <div className="md:hidden ">
        {/* 16:9 aspect ratio on mobile */}
        <AspectRatio ratio={16 / 9} className="bg-slate-50">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            width={800}
            height={450}
            className="rounded-lg object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
      <div className="hidden md:block">
        {/* 3:4 aspect ratio on larger screens */}
        <AspectRatio ratio={3 / 4} className="bg-slate-50">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            width={600}
            height={800}
            className="rounded-lg object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 md:px-0 py-12">
      <div
        className={`flex flex-col md:flex-row items-center gap-8 ${
          imageLeft ? "md:flex-row-reverse" : ""
        }`}
      >
        {ContentSection}
        {ImageSection}
      </div>
    </div>
  );
};

export default TwoColumnLayout;

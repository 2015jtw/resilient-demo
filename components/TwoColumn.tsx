import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ContentItem {
  title: string;
  body: { children: { text: string }[] }[] | null;
  button_text?: string;
  button_link?: string;
  socialAltText: string;
  image: { asset: { _ref: string } };
}

interface TwoColumnLayoutProps {
  item: ContentItem;
  imageLeft?: boolean;
  className?: string;
  longImageOnDesktop?: boolean;
}

const TwoColumnLayout = ({
  item,
  imageLeft = false,
  className,
  longImageOnDesktop = false,
}: TwoColumnLayoutProps) => {
  const descriptionContent = item.body?.map((block, blockIdx) => (
    <p
      key={blockIdx}
      className={`${longImageOnDesktop ? `text-base lg:text-lg` : `text-base`} text-gray-700 leading-relaxed mb-4`}
    >
      {block.children.map((child, childIdx) => (
        <span key={childIdx}>{child.text}</span>
      ))}
    </p>
  ));

  const ContentSection = (
    <div className="w-full md:w-1/2 space-y-4 lg:space-y-6 px-4">
      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
        {item.title}
      </h3>
      <div className="space-y-4 text-gray-700">{descriptionContent}</div>
      {item.button_text && item.button_link && (
        <Link href={item.button_link}>
          <Button size="lg" className="group mt-6">
            {item.button_text}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      )}
    </div>
  );

  const imageSrc = urlFor(item.image.asset._ref).url();

  const ImageSection = (
    <div className="w-full md:w-1/2">
      <div className="md:hidden">
        {/* 16:9 aspect ratio on mobile screens */}
        <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={item.socialAltText}
            width={640}
            height={360}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
      </div>
      <div className="hidden md:block lg:hidden">
        {/* 3:4 aspect ratio on medium screens */}
        <AspectRatio ratio={3 / 4} className="bg-gray-100 rounded-xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={item.socialAltText}
            width={300}
            height={400}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
      </div>
      <div className="hidden lg:block">
        {/* Use 3:4 or 2:3 aspect ratio on larger screens based on longImageOnDesktop prop */}
        <AspectRatio
          ratio={longImageOnDesktop ? 2 / 3 : 1 / 1}
          className="bg-gray-100 rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={imageSrc}
            alt={item.socialAltText}
            width={400}
            height={longImageOnDesktop ? 600 : 400}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </AspectRatio>
      </div>
    </div>
  );

  return (
    <div className={`container mx-auto px-4 md:px-6 py-16 lg:py-20 ${className}`}>
      <div
        className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
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

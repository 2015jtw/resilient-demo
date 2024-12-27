import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface ContentItem {
  title: string;
  body: { children: { text: string }[] }[];
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
  const descriptionContent = item.body.map((block, blockIdx) => (
    <div
      key={blockIdx}
      className={`${longImageOnDesktop ? `lg:text-lg` : `lg:text-base`} text-sm xl:text-lg mb-4`}
    >
      {block.children.map((child, childIdx) => (
        <p key={childIdx}>{child.text}</p>
      ))}
    </div>
  ));

  const ContentSection = (
    <div className="w-full md:w-1/2 space-y-2 lg:space-y-6 px-2">
      <h3 className="text-3xl md:px-2 font-normal">{item.title}</h3>
      <div className="space-y-4 md:px-2">{descriptionContent}</div>
      {item.button_text && item.button_link && (
        <Link href={item.button_link} className="md:px-2">
          <Button className="mt-4">{item.button_text}</Button>
        </Link>
      )}
    </div>
  );

  const imageSrc = urlFor(item.image.asset._ref).url();

  const ImageSection = (
    <div className="w-full md:w-1/2">
      <div className="md:hidden">
        {/* 16:9 aspect ratio on mobile screens */}
        <AspectRatio ratio={16 / 9} className="bg-slate-50">
          <Image
            src={imageSrc}
            alt={item.socialAltText}
            width={640}
            height={360}
            className="rounded-lg object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
      <div className="hidden md:block lg:hidden">
        {/* 3:4 aspect ratio on medium screens */}
        <AspectRatio ratio={3 / 4} className="bg-slate-50">
          <Image
            src={imageSrc}
            alt={item.socialAltText}
            width={300}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
      <div className="hidden lg:block">
        {/* Use 3:4 or 2:3 aspect ratio on larger screens based on longImageOnDesktop prop */}
        <AspectRatio
          ratio={longImageOnDesktop ? 2 / 3 : 1 / 1}
          className="bg-slate-50"
        >
          <Image
            src={imageSrc}
            alt={item.socialAltText}
            width={300}
            height={longImageOnDesktop ? 400 : 300}
            className="rounded-lg object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
    </div>
  );

  return (
    <div className={`container mx-auto px-4 md:px-0 py-12 ${className}`}>
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

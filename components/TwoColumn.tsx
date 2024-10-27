import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { urlFor } from "@/sanity/client";
import Link from "next/link";

interface ContentItem {
  title: string;
  body: { children: { text: string }[] }[]; // Adjusted to match your data structure
  button_text?: string;
  button_link?: string;
  socialAltText: string;
  image: { asset: { _ref: string } }; // Assuming the image structure you shared
}

interface TwoColumnLayoutProps {
  item: ContentItem;
  imageLeft?: boolean;
}

const TwoColumnLayout = ({ item, imageLeft = false }: TwoColumnLayoutProps) => {
  const descriptionContent = item.body.map((block, blockIdx) => (
    <div key={blockIdx} className="text-lg leading-8 mb-4">
      {block.children.map((child, childIdx) => (
        <p key={childIdx}>{child.text}</p>
      ))}
    </div>
  ));

  const ContentSection = (
    <div className="w-full md:w-1/2 space-y-6">
      <h3 className="text-3xl font-normal">{item.title}</h3>
      <div className="space-y-4">{descriptionContent}</div>
      {item.button_text && item.button_link && (
        <Link href={item.button_link}>
          <Button className="mt-4">{item.button_text}</Button>
        </Link>
      )}
    </div>
  );

  const imageSrc = urlFor(item.image.asset._ref).url(); // Use the image builder

  const ImageSection = (
    <div className="w-full md:w-1/2 ">
      <div className="md:hidden ">
        {/* 16:9 aspect ratio on mobile */}
        <AspectRatio ratio={16 / 9} className="bg-slate-50">
          <Image
            src={imageSrc}
            alt={item.socialAltText}
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
            src={imageSrc}
            alt={item.socialAltText}
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

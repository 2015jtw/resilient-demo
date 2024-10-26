import Image from "next/image";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const ImageWithText = ({
  image,
  title,
  description,
  cta,
  link,
  swap,
  id,
}: {
  image: string;
  title: string;
  description: string;
  cta: string;
  link: string;
  swap?: boolean;
  id?: string;
}) => {
  return (
    <div
      className={`w-full flex flex-col md:flex-row items-center justify-between bg-white py-4 ${
        swap ? "md:flex-row-reverse" : ""
      }`}
      id={id}
    >
      <div className="w-full h-auto rounded">
        <Image
          src={image}
          alt={title}
          width={1500}
          height={1000}
          objectFit="cover"
          className="rounded"
        />
      </div>

      <div
        className={`w-full my-4 md:mt-0 px-2 ${swap ? "md:pr-4" : "md:pl-4"}`}
      >
        <h4 className="text-xl sm:text-2xl font-bold mb-2 text-left">
          {title}
        </h4>
        <p className="text-sm md:text-md lg:text-lg font-light leading-8">
          {description}
        </p>
        <Link
          href={link}
          className={`${buttonVariants({ variant: "secondary" })} mt-4 text-sm md:text-md lg:text-lg`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
};

export default ImageWithText;

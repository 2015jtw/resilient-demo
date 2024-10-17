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
      className={`w-full flex flex-col md:flex-row items-center justify-between bg-white ${
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

      <div className={`w-full my-4 md:mt-0 p-4 md:p-0`}>
        <h4 className="md:px-10 text-4xl sm:text-2xl font-bold mb-2 text-left">
          {title}
        </h4>
        <p className="md:px-10 text-sm md:text-md xl:text-lg font-light">
          {description}
        </p>
        <Link
          href={link}
          className={`${buttonVariants({ variant: "secondary" })} mx-10 mt-4`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
};

export default ImageWithText;

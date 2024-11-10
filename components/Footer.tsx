import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { client } from "@/sanity/client";

type AboutData = {
  socialLinks: string[];
  socialAltText: string[];
};

const ABOUT_QUERY = `*[_type == "homepageAbout"]{
  socialLinks,
  socialAltText
}`;
const options = { next: { revalidate: 30 } };

const Footer = async () => {
  const about = await client.fetch<AboutData[]>(ABOUT_QUERY, {}, options);

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex justify-center space-x-6">
            <Link
              href={about[0].socialLinks[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white p-1 rounded-lg hover:text-primary hover:border-primary transition-colors"
            >
              <FaLinkedinIn className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={about[0].socialLinks[1]}
              target="_blank"
              rel="noopener noreferrer"
              className=" border border-white p-1 rounded-lg hover:text-primary hover:border-primary transition-colors"
            >
              <FaFacebookF className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href={about[0].socialLinks[2]}
              target="_blank"
              rel="noopener noreferrer"
              className=" border border-white p-1 rounded-lg hover:text-primary hover:border-primary transition-colors"
            >
              <FaMediumM className="w-6 h-6" />
              <span className="sr-only">Medium</span>
            </Link>
          </div>

          <h3 className="text-lg font-semibold mb-2 text-center">
            © 2023 Resilient LLC | All Rights Reserved
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

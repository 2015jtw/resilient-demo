import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { client } from "../sanity/lib/client";
import { FOOTER_QUERY } from "@/sanity/lib/queries";
import { FOOTER_QUERYResult } from "@/sanity.types";

const options = { next: { revalidate: 30 } };

const Footer = async () => {
  const about: FOOTER_QUERYResult = await client.fetch(
    FOOTER_QUERY,
    {},
    options
  );

  const socialLinks =
    about && about[0] && about[0].socialLinks
      ? [
          {
            url: about[0].socialLinks[0],
            icon: FaLinkedinIn,
            label: "LinkedIn",
          },
          {
            url: about[0].socialLinks[1],
            icon: FaFacebookF,
            label: "Facebook",
          },
          { url: about[0].socialLinks[2], icon: FaMediumM, label: "Medium" },
        ]
      : [];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex justify-center items-center space-x-4">
            {socialLinks.map(
              (link, index) =>
                link.url && (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    <span className="w-6 h-6 flex items-center justify-center">
                      <link.icon className="w-4 h-4" />
                    </span>
                    <span className="sr-only">{link.label}</span>
                  </Link>
                )
            )}
          </div>

          <h3 className="text-sm sm:text-base font-semibold text-center">
            © {new Date().getFullYear()} Resilient LLC | All Rights Reserved
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

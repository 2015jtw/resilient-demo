import React from "react";
import Link from "next/link";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaMediumM } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto ">
        <div className="">
          <h3 className="text-lg font-semibold mb-2 text-center">
            ©2023 Resilient LLC | All Rights Reserved
          </h3>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <CiLinkedin size={32} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <CiFacebook size={32} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaMediumM size={32} />
              <span className="sr-only">Medium</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

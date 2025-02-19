"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Send, Copy, Check } from "lucide-react";

const ProtonMail = () => {
  const [copied, setCopied] = useState(false);
  const email = "dockevin@proton.me";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="px-4 py-12 pb-16" id="contact-form">
      <div className="flex flex-col items-center py-10 space-y-4">
        <h2 className="text-4xl text-center py-4">Contact Us</h2>

        <p className="text-center text-lg pb-6 italic">
          Contact Communications are encrypted for your privacy and security
        </p>

        <div className="flex gap-4">
          <a href={`mailto:${email}`}>
            <Button className="group transform active:scale-95 transition-all duration-200 w-40 h-10 text-lg">
              Send Email{" "}
              <span className="transition-transform duration-200 ease-in-out transform group-hover:translate-x-1 ml-2">
                <Send size={20} />
              </span>
            </Button>
          </a>

          <Button
            onClick={handleCopy}
            variant="outline"
            className="group transform active:scale-95 transition-all duration-200 w-40 h-10 text-lg"
          >
            {copied ? "Copied!" : "Copy Email"}{" "}
            <span className="transition-transform duration-200 ease-in-out transform group-hover:translate-x-1 ml-2">
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProtonMail;

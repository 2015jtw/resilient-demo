import React from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const ProtonMail = () => {
  return (
    <section className="px-4 py-12 pb-16" id="contact-form">
      <div className="flex flex-col items-center py-10">
        <h2 className="text-4xl text-center py-4">Contact Us</h2>

        <p className="text-center text-lg pb-6 italic">
          Contact Communications are encrypted for your privacy and security
        </p>

        <a href="mailto:dockevin@proton.me">
          <Button className="group transform active:scale-95 transition-all duration-200 w-40 h-10 text-lg">
            Send Email{" "}
            <span className="transition-transform duration-200 ease-in-out transform group-hover:translate-x-1">
              <Send />
            </span>
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ProtonMail;

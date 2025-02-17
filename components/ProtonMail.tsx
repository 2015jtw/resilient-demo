import React from "react";
import Link from "next/link";
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

        <Link href="mailto:dockevin@proton.me">
          <Button>
            Send Email{" "}
            <span>
              <Send />
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProtonMail;

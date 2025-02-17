import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const ProtonMail = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-4xl text-center py-4">Contact Us</h2>

      <p className="text-center text-lg pb-6 italic">
        Contact Communications are encrypted for your privacy and security
      </p>

      <Link href="mailto:dockevin@proton.me">
        <Button>Send Email</Button>
      </Link>
    </div>
  );
};

export default ProtonMail;

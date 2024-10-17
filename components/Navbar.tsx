"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const services = [
  {
    name: "Crisis Leadership",
    description: "Our philosophy is to empower leaders to be well-prepared",
    href: "#crisis-leadership",
    imageUrl: "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    name: "Crisis Communication",
    description: "Communicating effectively in a crisis is crucial",
    href: "#crisis-communication",
    imageUrl: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
  },
  {
    name: "Risk Management",
    description: "The storm has arrived…",
    href: "#risk-management",
    imageUrl:
      "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png",
  },
  {
    name: "Business Continuity",
    description:
      "Recognize the critical need of maintaining key functionality in disruptive environments",
    href: "#business-continuity",
    imageUrl: "https://assets.aceternity.com/demos/algochurn.webp",
  },
  {
    name: "Business Assessments",
    description: "Provide senior leadership and boards with strategic plans",
    href: "#business-assessments",
    imageUrl:
      "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png",
  },
];

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex justify-start">
            <Link href="/">
              <Image
                src="/images/resilient-logo.png"
                alt="test"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="flex-1 flex justify-center space-x-8">
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                {services.map((service, idx) => {
                  return (
                    <ProductItem
                      key={idx}
                      title={service.name}
                      src={service.imageUrl}
                      href={service.href}
                      description={service.description}
                    />
                  );
                })}
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Blog">
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>

            <HoveredLink href="#about">About</HoveredLink>
          </div>

          <Link href="#contact-form">
            <Button className="rounded-md" variant={"secondary"}>
              Contact Us
            </Button>
          </Link>
        </div>
      </Menu>
    </div>
  );
}

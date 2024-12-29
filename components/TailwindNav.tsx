"use client";

// React/NextJS
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// UI Components
import { Button } from "./ui/button";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  CloseButton,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Services Data
import servicesHardCoded from "@/lib/data";

// Sanity
import { NAVBAR_QUERYResult } from "@/sanity.types";

export default function TailwindNav({
  services,
}: {
  services: NAVBAR_QUERYResult;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileClick = () => {
    setMobileMenuOpen(false);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    console.log("navbarData", services);
  }, [services]);

  return (
    <header className="bg-white shadow-md">
      {/* DESKTOP NAV */}
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-16 lg:px-12"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image
              src="/images/final-resilient-logo.png"
              alt="Logo"
              width={70}
              height={70}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors">
                  Services
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`h-5 w-5 flex-none text-gray-400 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {servicesHardCoded.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-gray-600 group-hover:text-primary"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link href={item.href} passHref>
                            <CloseButton
                              as="a"
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </CloseButton>
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Link
            href="/about-us"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
          >
            Blog
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/#contact-form">
            <Button>Get in Touch</Button>
          </Link>
        </div>
      </nav>
      {/* MOBILE NAV */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={handleMobileClick}>
              <Image
                src="/images/final-resilient-logo.png"
                alt="Logo"
                width={70}
                height={70}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...servicesHardCoded].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        onClick={handleMobileClick}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/about-us"
                  onClick={handleMobileClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  onClick={handleMobileClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/#contact-form"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

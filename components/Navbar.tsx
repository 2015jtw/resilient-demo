"use client";

import { useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const services = [
  {
    name: "Crisis Leadership",
    description: "Our philosophy is to empower leaders to be well-prepared",
    href: "#crisis-leadership",
    icon: ChartPieIcon,
  },
  {
    name: "Crisis Communication",
    description: "Communicating effectively in a crisis is crucial",
    href: "#crisis-communication",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Risk Management",
    description: "The storm has arrived…",
    href: "#risk-management",
    icon: FingerPrintIcon,
  },
  {
    name: "Business Continuity",
    description:
      "Recognize the critical need of maintaining key functionality in disruptive environments",
    href: "#business-continuity",
    icon: SquaresPlusIcon,
  },
  {
    name: "Business Assessments",
    description: "Provide senior leadership and boards with strategic plans",
    href: "#business-assessments",
    icon: ArrowPathIcon,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm top-0">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[85rem] items-center justify-between py-2 px-8"
      >
        <div className="flex items-center">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="-m-1.5 p-1.5 cursor-pointer"
          >
            <span className="sr-only">Your Company</span>
            <Image
              alt="test"
              width={50}
              height={50}
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </ScrollLink>
        </div>
        <div className="flex-1 hidden lg:flex justify-center">
          <PopoverGroup className="lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Services
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-gray-400"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="flex-auto">
                        <ScrollLink
                          to={item.href}
                          className="block font-semibold text-gray-900"
                          smooth={true}
                          duration={500}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </ScrollLink>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <ScrollLink
              to="about-us"
              smooth={true}
              duration={500}
              className="text-sm font-semibold leading-6 cursor-pointer text-gray-900"
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="blog"
              smooth={true}
              duration={500}
              className="text-sm font-semibold cursor-pointer leading-6 text-gray-900"
            >
              Blog (Coming Soon)
            </ScrollLink>
            <ScrollLink
              smooth={true}
              duration={500}
              to="contact-us"
              className="text-sm font-semibold cursor-pointer leading-6 text-gray-900"
            >
              Contact Us
            </ScrollLink>
          </PopoverGroup>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="-m-1.5 cursor-pointer p-1.5"
            >
              <span className="sr-only">Your Company</span>
              <Image
                alt="test"
                width={50}
                height={50}
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </ScrollLink>
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
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <ScrollLink
                  to="about-us"
                  smooth={true}
                  duration={500}
                  className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </ScrollLink>
                <ScrollLink
                  to="blog"
                  smooth={true}
                  duration={500}
                  className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog (Coming Soon)
                </ScrollLink>
                <ScrollLink
                  to="contact-us"
                  smooth={true}
                  duration={500}
                  className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </ScrollLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

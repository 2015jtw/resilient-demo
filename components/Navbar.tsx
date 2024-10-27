"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const services = [
  { title: "Crisis Leadership", href: "/services/crisisleadership" },
  { title: "Crisis Communication", href: "/services/crisiscommunication" },
  { title: "Risk Management", href: "/services/riskmanagement" },
  { title: "Business Continuity", href: "/services/businesscontinuity" },
  { title: "Assessments", href: "/services/assessments" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4 bg-white/80 backdrop-blur-md rounded-full mt-4 px-6 shadow-lg">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="sr-only">Resilient LLC</span>
              <Image
                src="/images/resilient-logo.png"
                alt="Logo"
                width={24}
                height={24}
              />
              <span className="font-bold text-xl">Resilient LLC</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              Blog
            </Link>
            <Link
              href="/about-us"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              About Us
            </Link>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  <Link href="/services" className="text-lg font-medium">
                    Services
                  </Link>
                  <Link href="/blog" className="text-lg font-medium">
                    Blog
                  </Link>
                  <Link href="/about" className="text-lg font-medium">
                    About Us
                  </Link>
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
  ListItem,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Crisis Leadership",
      href: "#crisis-leadership",
      description:
        "Our philosophy is to empower leaders to be well-prepared well in advance of crises that inevitably come their way.",
    },
    {
      title: "Crisis Communication",
      href: "#crisis-communication",
      description:
        "Communicating effectively in a crisis is crucial and not without risk.",
    },
    {
      title: "Risk Management",
      href: "#risk-management",
      description:
        "The storm has arrived… you are in the midst of a crisis that may be escalating rapidly with dire consequences.",
    },
    {
      title: "Business Continuity",
      href: "#business-continuity",
      description:
        "Business continuity has dramatically grown in importance among innovative firms that recognize the critical need of maintaining key functionality in disruptive environments.",
    },
    {
      title: "Business Assessments",
      href: "#business-assessments",
      description:
        "Our team can provide senior leadership and boards with an assessment of both the operational capabilities and overall strategic plans associated with crisis management, business continuity, as well as vulnerability assessments.",
    },
  ];

  return (
    <NavigationMenu className="py-6">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">
              <Image
                src="/images/world-wide-signal.png"
                width={50}
                height={50}
                alt="test"
              />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog (Coming Soon)
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Navbar;

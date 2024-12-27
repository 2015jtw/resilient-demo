import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { client } from "../sanity/lib/client";
import { HOME_ABOUT_QUERY } from "@/sanity/lib/queries";
import { HOME_ABOUT_QUERYResult } from "@/sanity.types";
import { PortableText } from "next-sanity";

interface SocialLink {
  url: string;
  icon: React.ElementType;
  label: string;
}

export default async function AboutSection() {
  const about = await client.fetch(HOME_ABOUT_QUERY);
  const data: HOME_ABOUT_QUERYResult[0] = about[0];

  const socialLinks: SocialLink[] = data.socialLinks
    ? [
        { url: data.socialLinks[0], icon: FaLinkedinIn, label: "LinkedIn" },
        { url: data.socialLinks[1], icon: FaFacebookF, label: "Facebook" },
        { url: data.socialLinks[2], icon: FaMediumM, label: "Medium" },
      ]
    : [];

  return (
    <section className="py-8 md:pt-12" id="about">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl text-center mb-8">{about[0].title}</h2>

        <div className="space-y-6 mb-8 px-8">
          {data &&
            data.body?.map((item, idx: number) => (
              <PortableText
                value={item}
                key={idx}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-foreground text-base xl:text-lg leading-8 xl:leading-10">
                        {children}
                      </p>
                    ),
                  },
                }}
              />
            ))}
        </div>

        <div className="flex justify-center items-center space-x-4">
          {socialLinks.map(
            (link, index) =>
              link.url && (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
                >
                  <span className="w-8 h-8 flex items-center justify-center">
                    <link.icon className="w-6 h-6" />
                  </span>
                  <span className="sr-only">{link.label}</span>
                </Link>
              )
          )}
        </div>
      </div>
    </section>
  );
}

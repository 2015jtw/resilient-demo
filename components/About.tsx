import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { client } from "../sanity/lib/client";
import { HOME_ABOUT_QUERY } from "@/sanity/lib/queries";
import { HOME_ABOUT_QUERYResult } from "@/sanity.types";
import { PortableText } from "next-sanity";

export default async function AboutSection() {
  const about = await client.fetch(HOME_ABOUT_QUERY);
  const data: HOME_ABOUT_QUERYResult[0] = about[0];

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

        <div className="flex justify-center space-x-6">
          {about[0].socialLinks && about[0].socialLinks[0] && (
            <Link
              href={about[0].socialLinks[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-1 rounded-lg hover:text-primary hover:border-primary transition-colors"
            >
              <span className="w-6 h-6">
                <FaLinkedinIn />
              </span>
              <span className="sr-only">LinkedIn</span>
            </Link>
          )}

          {about[0].socialLinks && about[0].socialLinks[1] && (
            <Link
              href={about[0].socialLinks[1]}
              target="_blank"
              rel="noopener noreferrer"
              className=" border border-black p-1 rounded-lg hover:text-primary hover:border-primary transition-colors"
            >
              <span className="w-6 h-6">
                <FaFacebookF />
              </span>
              <span className="sr-only">Facebook</span>
            </Link>
          )}
          {about[0].socialLinks && about[0].socialLinks[2] && (
            <Link
              href={about[0].socialLinks[2]}
              target="_blank"
              rel="noopener noreferrer"
              className=" border border-black p-1 rounded-lg hover:text-primary hover:border-primary transition-colors"
            >
              <span className="w-6 h-6">
                <FaMediumM />
              </span>
              <span className="sr-only">Medium</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

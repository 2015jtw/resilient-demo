import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { client } from "@/sanity/client";

type TextChild = {
  text: string;
};

type BodyItem = {
  children: TextChild[];
};

type AboutData = {
  title: string;
  body: BodyItem[];
  socialLinks: string[];
  socialAltText: string[];
};

const ABOUT_QUERY = `*[_type == "homepageAbout"]{
  title,
  body,
  socialLinks,
  socialAltText
}`;
const options = { next: { revalidate: 30 } };

export default async function AboutSection() {
  const about = await client.fetch<AboutData[]>(ABOUT_QUERY, {}, options);

  return (
    <section className="py-8 md:pt-12" id="about">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl text-center mb-8">{about[0].title}</h2>

        <div className="space-y-6 mb-8 px-8">
          {about[0].body.map((item, idx: number) => (
            <p
              className="text-foreground text-base xl:text-lg leading-8 xl:leading-10"
              key={idx}
            >
              {item.children[0].text}
            </p>
          ))}
        </div>

        <div className="flex justify-center space-x-6">
          <Link
            href={about[0].socialLinks[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black p-1 rounded-lg hover:text-primary hover:border-primary transition-colors"
          >
            <FaLinkedinIn className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href={about[0].socialLinks[1]}
            target="_blank"
            rel="noopener noreferrer"
            className=" border border-black p-1 rounded-lg hover:text-primary hover:border-primary transition-colors"
          >
            <FaFacebookF className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href={about[0].socialLinks[2]}
            target="_blank"
            rel="noopener noreferrer"
            className=" border border-black p-1 rounded-lg hover:text-primary hover:border-primary transition-colors"
          >
            <FaMediumM className="w-6 h-6" />
            <span className="sr-only">Medium</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Fragment } from "react";
import aboutData from "@/lib/aboutData";

export default function AboutUs() {
  return (
    <>
      <h1>About Us</h1>

      <div className="container mx-auto">
        {Object.values(aboutData).map((section, index) => (
          <div key={index}>
            <h2 className="text-3xl font-medium pb-4">{section.title}</h2>
            {section.description.map((paragraph, i) => (
              <p key={i} className="text-lg font-medium leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

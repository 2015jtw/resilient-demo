import { Fragment } from "react";
import aboutData from "@/lib/aboutData";
import NewsPaper from "@/components/Newspaper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <>
      {/* <div className="">
        <NewsPaper
          title={aboutData.sectionOne.title}
          description={aboutData.sectionOne.description}
          imageUrl="/images/assessments.jpeg"
        />
      </div> */}
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center pt-16 p-4 overflow-hidden">
        <Card className="max-w-lg w-full bg-white shadow-xl mt-12 p-6">
          <CardHeader>
            <CardTitle>{aboutData.sectionOne.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aboutData.sectionOne.description.map((paragraph, index) => (
              <p key={index} className="text-md font-medium leading-8">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
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

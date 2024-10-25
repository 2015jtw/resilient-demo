import Image from "next/image";

interface NewsPaperProps {
  title: string;
  description: string[];
  imageUrl: string;
}

export default function NewsPaper({
  title,
  description,
  imageUrl,
}: NewsPaperProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 p-4 overflow-hidden">
      <Image
        src={imageUrl}
        alt="Background of people"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-opacity-30" />
      <div className="bg-white max-w-2xl mt-12 p-6 relative z-10 rounded-md shadow-xl">
        <h1 className=" text-2xl md:text-3xl leading-tight mb-6 text-center font-medium">
          {title}
        </h1>
        {description.map((paragraph, index) => (
          <p
            key={index}
            className={`text-gray-800 text-sm md:text-base mt-4 ${
              index === description.length - 1 ? "italic md:text-lg mt-6" : ""
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

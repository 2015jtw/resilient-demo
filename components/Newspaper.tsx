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
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <Image
        src={imageUrl}
        alt="Background of people"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-red-600 bg-opacity-30" />
      <div className="bg-white max-w-3xl p-8 md:p-12 relative z-10">
        <h1 className="text-red-600 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>
        {description.map((paragraph, index) => (
          <p key={index} className="text-gray-800 text-sm md:text-base mt-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

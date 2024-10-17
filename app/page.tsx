import HeroSection from "@/components/Hero-Section";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="my-5">
        <h1 className="text-center pb-4 font-semibold text-2xl">
          Routing for Navigation Menu
        </h1>
        <div className="flex justify-center gap-4">
          <p id="home">Home</p>
          <p id="about-us">About Us</p>
          <p id="blog">Blog</p>
          <p id="contact-us">Contact</p>
        </div>
      </div>
      <HeroSection />
    </div>
  );
}

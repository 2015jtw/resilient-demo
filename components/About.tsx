import Link from "next/link";
import { FaFacebook, FaLinkedin, FaMedium } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="mt-10 py-8 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          About Us
        </h2>

        <div className="space-y-6 mb-8 text-foreground">
          <p>
            Resilient, LLC is a nontraditional advisory service focused on
            guiding boards and executive teams to appropriately develop risk and
            crisis management strategies. It is our goal to assist you in
            developing a set of policies and practices that better prepare your
            team for the inevitable crises that visit all of us at some point.
          </p>
          <p>
            Resilient, LLC grew out of Resiliency Partners, founded in 2011 as a
            specialized sub-consultancy supporting disaster response, hazard and
            vulnerability assessments, business continuity, and emergency
            preparedness. Our principal, Dr. Kevin Schaller, served in several
            roles supporting public firms, government agencies, and higher
            education, as well as extensive pro-bono services to nonprofit
            organizations.
          </p>
          <p>
            Resilient, LLC maintains a network of subject matter experts across
            a wide spectrum of domains related to crises. We strive to provide
            appropriate recommendations for the resources that may be required
            to better prepare your organization, regardless of the current
            environment, whether that be blue skies or in the midst of a
            hurricane. We invite you to have a discussion with us.
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaFacebook size={24} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaMedium size={24} />
            <span className="sr-only">Medium</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

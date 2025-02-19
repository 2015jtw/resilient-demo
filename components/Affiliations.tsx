// React/Next
import React from "react";
import Link from "next/link";
import Image from "next/image";

// SANITY
import { client } from "../sanity/lib/client";
import { AFFILIATIONS_QUERY } from "../sanity/lib/queries";
import { AFFILIATIONS_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

const options = { next: { revalidate: 30 } };

const Affiliations = async () => {
  const data: AFFILIATIONS_QUERYResult = await client.fetch(
    AFFILIATIONS_QUERY,
    {},
    options
  );
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-4xl text-center mb-8">Affiliations</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {data.map((affiliation) => (
            <Link
              key={affiliation._id}
              href={affiliation.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-4 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <Image
                src={affiliation.logo ? urlFor(affiliation.logo).url() : ""}
                alt={affiliation.logo?.alt || "Affiliation Logo"}
                width={150}
                height={75}
                className="object-contain w-full h-12 transition-opacity group-hover:opacity-80"
              />
              <span className="sr-only">{affiliation.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;

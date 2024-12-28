// React/Next
import React from "react";

// UI
import ServiceHero from "@/components/ServiceHero";

// sanity
import { client } from "../../../sanity/lib/client";
import { SINGLE_SERVICE_PAGE_QUERY } from "@/sanity/lib/queries";
import { SINGLE_SERVICE_PAGE_QUERYResult } from "@/sanity.types";

interface ServiceTemplateProps {
  params: {
    slug: string;
  };
}

const options = { next: { revalidate: 30 } };

export default async function ServiceTemplate({
  params,
}: ServiceTemplateProps) {
  const { slug } = params;
  const service: SINGLE_SERVICE_PAGE_QUERYResult | null = await client.fetch(
    SINGLE_SERVICE_PAGE_QUERY,
    { slug },
    options
  );

  return (
    <div>
      <ServiceHero service={service} />
    </div>
  );
}

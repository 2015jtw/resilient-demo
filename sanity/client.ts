import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "he4wky6v",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

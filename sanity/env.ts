export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-12";

// use NEXT_PUBLIC_SANITY_STUDIO_DATASET for local development and SANITY_STUDIO_DATASET for production
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_DATASET"
);

// use NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID for local development and SANITY_STUDIO_PROJECT_ID for production
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

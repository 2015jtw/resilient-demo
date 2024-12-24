import React from "react";
import BlogPost from "@/components/BlogPost";

// sanity
import { client } from "../../../sanity/lib/client";
import { SINGLE_BLOG_POST_QUERY } from "@/sanity/lib/queries";
import { SINGLE_BLOG_POST_QUERYResult } from "@/sanity.types";

type BlogPostPageProps = {
  params: { slug: string }; // `params` is used in Next.js's App Router
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post: SINGLE_BLOG_POST_QUERYResult | null = await client.fetch(
    SINGLE_BLOG_POST_QUERY,
    { slug }
  );
  return <BlogPost post={post} />;
}

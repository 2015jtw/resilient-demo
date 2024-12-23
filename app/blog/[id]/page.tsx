import React from "react";
import BlogPost from "@/components/BlogPost";

// sanity
import { client } from "../../../sanity/lib/client";
import { BLOG_POST_QUERY } from "@/sanity/lib/queries";
import { BLOG_POST_QUERYResult } from "@/sanity.types";

export default async function BlogPostPage() {
  const post: BLOG_POST_QUERYResult = await client.fetch(BLOG_POST_QUERY);

  return <BlogPost post={post} />;
}

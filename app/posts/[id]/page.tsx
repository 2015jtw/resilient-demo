// app/posts/[id]/page.tsx
import React, { use } from "react";

async function getPostById(id: string) {
  const response = await fetch(`/api/getPostById?id=${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post data");
  }
  return response.json();
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = use(getPostById(params.id));

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

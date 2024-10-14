// app/posts/[id]/page.tsx

interface PostProps {
  params: { id: string };
}

async function getPostById(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPostById?id=${id}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch post data");
  }

  return response.json();
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostById(params.id);

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

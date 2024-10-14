interface PageProps {
  params: { id: string };
}

async function getPageById(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageById?id=${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch page data");
  }
  return response.json();
}

export default async function PageComponent({ params }: PageProps) {
  const page = await getPageById(params.id);

  return (
    <div>
      <h1>{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  );
}

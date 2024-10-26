import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const SERVICE_QUERY = `*[_type == "homeServices"]`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  const services = await client.fetch<SanityDocument[]>(
    SERVICE_QUERY,
    {},
    options
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 mt-20">
      <div>
        <h1 className="text-4xl font-bold mb-8">{services[0].title}</h1>
        {services[0].body.map((item, idx) => (
          <p key={idx}>{item.children[0].text}</p>
        ))}
      </div>
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

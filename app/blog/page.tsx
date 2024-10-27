import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// This would typically come from Sanity
const DUMMY_POSTS = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content: [
      "Learn the basics of Next.js and start building modern web applications.",
      "Learn the basics of Next.js and start building modern web applications.",
      "Learn the basics of Next.js and start building modern web applications.",
    ],
    date: "2024-10-27",
    slug: `blog/id`,
  },
  {
    id: "2",
    title: "Tough",
    content: [
      "Learn the basics of Next.js and start building modern web applications.",
      "Learn the basics of Next.js and start building modern web applications.",
      "Learn the basics of Next.js and start building modern web applications.",
    ],
    date: "2024-10-27",
    slug: `blog/id`,
  },
];

export default function BlogIndex() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {DUMMY_POSTS.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <p className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}

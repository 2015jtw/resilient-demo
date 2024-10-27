import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// This would typically come from Sanity
const posts = [
  {
    id: "1",
    title: "Getting Started with Next.js and Tailwind CSS",
    excerpt:
      "Learn how to build modern, responsive web applications using Next.js and Tailwind CSS. We'll cover setup, configuration, and best practices for creating beautiful user interfaces.",
    date: "2024-10-27",
    readTime: "5 min",
    category: "Development",
    imageUrl: "/api/placeholder/800/400",
    slug: "getting-started-with-nextjs",
  },
  {
    id: "2",
    title: "Mastering Content Management with Sanity",
    excerpt:
      "Discover how to leverage Sanity's powerful features to create a flexible and scalable content management system for your web applications.",
    date: "2024-10-26",
    readTime: "8 min",
    category: "CMS",
    imageUrl: "/api/placeholder/800/400",
    slug: "mastering-sanity",
  },
  {
    id: "3",
    title: "Building Beautiful UIs with shadcn/ui",
    excerpt:
      "Explore the comprehensive component library of shadcn/ui and learn how to create consistent, accessible, and beautiful user interfaces.",
    date: "2024-10-25",
    readTime: "6 min",
    category: "Design",
    imageUrl: "/api/placeholder/800/400",
    slug: "building-with-shadcn",
  },
];

export default function BlogIndex() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Latest Blog Posts</h1>
        <p className="text-gray-600 max-w-2xl">
          Explore our latest thoughts, ideas, and insights about web
          development, design, and technology.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-white/90 text-black hover:bg-white/75">
                {post.category}
              </Badge>
            </div>

            <CardHeader className="flex-grow">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <CardTitle className="text-xl font-bold mb-2 line-clamp-2">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 line-clamp-3">
              {post.excerpt}
            </CardContent>
            <CardFooter className="pt-4">
              <Link href={`/blog/${post.slug}`}>
                <Button className="group flex items-center gap-2">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

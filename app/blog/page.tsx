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

// sanity
import { client } from "../../sanity/lib/client";
import { BLOG_INDEX_QUERY } from "@/sanity/lib/queries";
import { BLOG_INDEX_QUERYResult } from "@/sanity.types";
import { PortableText } from "next-sanity";

export default async function BlogIndex() {
  const posts: BLOG_INDEX_QUERYResult = await client.fetch(BLOG_INDEX_QUERY);
  console.log("posts ", posts);
  return (
    <div className="container mx-auto px-4 py-8 my-10">
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">TITLE</h1>
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
                CATEGORY
              </Badge>
            </div>

            <CardHeader className="flex-grow">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.publishedAt}</span>
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
              {post.intro}
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

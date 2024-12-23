import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Calendar, ArrowRight, User } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// sanity
import { client } from "../../sanity/lib/client";
import { BLOG_INDEX_QUERY } from "@/sanity/lib/queries";
import { BLOG_INDEX_QUERYResult } from "@/sanity.types";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export default async function BlogIndex() {
  const posts: BLOG_INDEX_QUERYResult = await client.fetch(BLOG_INDEX_QUERY);
  console.log("posts ", posts);
  return (
    <div className="container mx-auto px-4 py-8 my-10">
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 max-w-2xl">
          Explore our latest thoughts, ideas, and insights about web
          development, design, and technology.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card
            key={post._id}
            className="flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative">
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={
                    post.mainImage.alt ? post.mainImage.alt : "Blog Post image"
                  }
                  className="w-full h-48 object-cover"
                  width={800}
                  height={400}
                />
              )}
              <Badge className="absolute top-4 right-4 bg-white/90 text-black hover:bg-white/75">
                {post.categories?.map((category) => category.title).join(", ")}
              </Badge>
            </div>

            <CardHeader className="flex-grow">
              {/* <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.publishedAt}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Approximately {post.readTime} minutes</span>
                </div>
              </div> */}
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2 flex-wrap">
                {post.author?.name && (
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author.name}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "Unknown date"}
                  </span>
                </div>
              </div>
              <CardTitle className="text-xl font-bold mb-2 line-clamp-2">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 line-clamp-3">
              {post.intro && <PortableText value={post.intro} />}
            </CardContent>
            <CardFooter className="pt-4">
              <Link href={`/blog/${post.slug?.current}`}>
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

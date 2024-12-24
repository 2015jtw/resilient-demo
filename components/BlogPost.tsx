import React from "react";
import Link from "next/link";
import Image from "next/image";

// UI
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

// sanity
import { urlFor } from "@/sanity/lib/image";
import { SINGLE_BLOG_POST_QUERYResult } from "@/sanity.types";

const BlogPost = ({ post }: { post: SINGLE_BLOG_POST_QUERYResult }) => {
  console.log("blog post", post);

  return (
    <article className="min-h-screen bg-gray-50">
      <div key={post?._id}>
        <div className="w-full h-[300px] md:h-[400px] relative bg-black">
          <Image
            src={post && post.mainImage ? urlFor(post.mainImage).url() : ""}
            alt={post?.mainImage?.alt || "Blog Post"}
            className="w-full h-full object-cover opacity-80"
            width={400}
            height={300}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <div className="container mx-auto max-w-4xl">
              <Badge className="mb-4 bg-blue-500 hover:bg-blue-600 text-white">
                {post &&
                  post.categories?.map((category) => category.title).join(", ")}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.publishedAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} minute read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="mb-8">
              <Link href="/blog" className="gap-2">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                {/* Author Card */}
                <Card className="mb-8 not-prose">
                  <CardContent className="flex items-center gap-4 p-6">
                    {/* TODO: Create IMG for Author Schema */}
                    {/* <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full"
                    /> */}
                    <div>
                      {/* TODO: Add type safety to post --> needs to be in query */}
                      <h3 className="font-semibold text-lg">AUTHOR NAME</h3>
                      <p className="text-gray-600">{post.author?.role}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* MAIN CONTENT */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;

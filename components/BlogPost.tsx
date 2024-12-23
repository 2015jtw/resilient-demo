import React from "react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

const TableOfContents = ({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) => (
  <Card className={className}>
    <CardContent className="p-6">
      <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
      <nav>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </CardContent>
  </Card>
);

interface Post {
  heroImage: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: {
    avatar: string;
    name: string;
    role: string;
  };
  content: string;
  tableOfContents: string[];
}

const BlogPost = ({ post }: { post: Post }) => {
  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full h-[300px] md:h-[400px] relative bg-black">
        <img
          src={post.heroImage}
          alt={post.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <div className="container mx-auto max-w-4xl">
            <Badge className="mb-4 bg-blue-500 hover:bg-blue-600 text-white">
              {post.category}
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
                <span>{post.readTime} read</span>
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
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {post.author.name}
                    </h3>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Introduction Paragraph */}
              <div className="lead mb-8">
                <p>{post.content}</p>
              </div>

              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-8 not-prose">
                <TableOfContents items={post.tableOfContents} />
              </div>

              {/* Rest of the Content */}
              <h2 id="introduction-to-nextjs">Introduction to Next.js</h2>
              <p>
                Next.js is a React framework that enables several extra
                features, including server-side rendering and generating static
                websites.
              </p>

              <h2 id="setting-up-your-development-environment">
                Setting up your development environment
              </h2>
              <p>
                Before you begin, ensure you have Node.js installed on your
                system. Next.js requires Node.js 12.22.0 or later.
              </p>

              <h2 id="understanding-the-basics">Understanding the basics</h2>
              <p>
                Next.js provides a file-system based router built on the concept
                of pages. When a file is added to the pages directory, it is
                automatically available as a route.
              </p>

              <h2 id="building-your-first-page">Building your first page</h2>
              <p>
                Create a new file in the pages directory to add a new route to
                your application. Next.js will automatically code-split your
                application by pages.
              </p>
            </div>

            {/* Desktop Sidebar */}
            <aside className="space-y-8">
              {/* Table of Contents */}
              <TableOfContents
                items={post.tableOfContents}
                className="hidden lg:block"
              />

              {/* Share Card */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Share this post
                  </h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;

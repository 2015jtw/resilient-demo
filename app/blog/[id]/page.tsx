import React from "react";
import BlogPost from "@/components/BlogPost";

const BlogPostPage = () => {
  const post = {
    title: "Getting Started with Next.js and Tailwind CSS",
    publishedAt: "2024-10-27",
    readTime: "5 min",
    category: "Development",
    author: {
      name: "John Doe",
      avatar: "/api/placeholder/64/64",
      role: "Senior Developer",
    },
    heroImage: "/api/placeholder/1200/600",
    content: `
      Next.js has emerged as one of the most popular frameworks for building React applications. 
      Combined with Tailwind CSS, it provides a powerful toolkit for creating modern web experiences.
    `,
    tableOfContents: [
      "Introduction to Next.js",
      "Setting up your development environment",
      "Understanding the basics",
      "Building your first page",
    ],
  };

  return <BlogPost post={post} />;
};

export default BlogPostPage;

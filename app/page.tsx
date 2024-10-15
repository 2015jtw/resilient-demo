"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          "https://public-api.wordpress.com/wp/v2/sites/resilient.llc/posts/33"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch the post data");
        }

        const data = await res.json();
        setPost(data); // Set the fetched data
      } catch (err: any | undefined) {
        setError(err.message); // Catch any errors and set the error state
      } finally {
        setLoading(false); // Set loading to false after the fetch is complete
      }
    };

    fetchPost(); // Call the fetch function when the component mounts
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if an error occurs
  }

  if (!post) {
    return <div>No post data available</div>; // Display a message if no post data is available
  }

  return (
    <div className="container mx-auto p-4">
      <div className="my-5">
        <h1>Routing for Navigation Menu</h1>
        <p id="home">Home</p>
        <p id="about-us">About Us</p>
        <p id="blog">Blog</p>
        <p id="contact-us">Contact</p>
      </div>
      <div className="my-5">
        <h1 className="text-xl">Grab Post Wordpress Test</h1>
        <p>Post ID: {post.id}</p>
        <h2 className="font-semibold py-4">{post.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </div>
  );
}

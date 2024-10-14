// export default async function Home() {
//   const res = await fetch(
//     "https://public-api.wordpress.com/wp/v2/sites/resilient.llc/posts/33"
//   );

//   const post = await res.json();
//   console.log("post: ", post);

//   return (
//     <div className="">
//       <h1>Resilient Demo</h1>
//       <p>Post ID: {post.id}</p>
//       <h2>{post.title.rendered}</h2>
//       <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
//     </div>
//   );
// }
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
      } catch (err) {
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
    <div className="">
      <h1>Resilient Demo</h1>
      <p>Post ID: {post.id}</p>
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

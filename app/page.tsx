"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Home() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(""); // State for image URL
  const [title, setTitle] = useState(""); // State for title
  const [description, setDescription] = useState(""); // State for description
  const [desc2, setDesc2] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          "https://public-api.wordpress.com/wp/v2/sites/resilient.llc/pages/53"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch the post data");
        }

        const data = await res.json();
        console.log("data: ", data.content.rendered);
        // console.log("home page data: ", data.content.rendered);
        setPage(data); // Set the fetched data
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.content.rendered, "text/html");

        const imgElement = doc.querySelector(
          ".wp-block-cover__image-background"
        );
        const titleElement = doc.querySelector(".wp-block-heading");
        const descriptionElement = doc.querySelector("p.has-text-color");
        const descContent = doc.querySelector(".wp-block-quote p");

        if (imgElement) {
          setImageUrl(imgElement.src); // Extract the image URL
        }
        if (titleElement) {
          setTitle(titleElement.textContent); // Extract the title text
        }

        if (descriptionElement) {
          setDescription(descriptionElement.textContent); // Extract the description text
        }
        if (desc2) {
          setDesc2(descContent?.textContent);
          console.log("show me: ", descContent);
        }
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

  if (!page) {
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
        <h1 className="text-xl">{title}</h1> {/* Display the extracted title */}
        {imageUrl && (
          <div className="h-10">
            <Image
              src={imageUrl}
              alt="homepage image"
              width={800}
              height={600}
            />
          </div>
        )}
        <p>{description}</p> {/* Display the extracted description */}
        <p>{desc2}</p>
      </div>
    </div>
  );
}

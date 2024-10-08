// app/api/getPostById/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { message: "Post ID is required" },
      { status: 400 }
    );
  }

  try {
    // Construct the absolute URL
    const url = `https://public-api.wordpress.com/wp/v2/sites/brisklyperfect673e684357.wordpress.com/posts/${id}`;

    const response = await fetch(url);

    if (!response.ok) {
      return NextResponse.json(
        { message: "Post not found" },
        { status: response.status }
      );
    }

    const post = await response.json();
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}

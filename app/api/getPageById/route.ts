import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { message: "Page ID is required" },
      { status: 400 }
    );
  }

  try {
    const url = `https://public-api.wordpress.com/wp/v2/sites/resilient.llc/pages/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      return NextResponse.json(
        { message: "Page not found" },
        { status: response.status }
      );
    }

    const page = await response.json();
    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}

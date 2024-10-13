export default async function Home() {
  // testURL = https://wordpress.com/posts/brisklyperfect673e684357.wordpress.com
  // resilientURL = https://wordpress.com/posts/resilient.llc

  // const res = await fetch(
  //   "https://public-api.wordpress.com/wp/v2/sites/brisklyperfect673e684357.wordpress.com/posts/10"
  // );

  try {
    const res = await fetch(
      "https://public-api.wordpress.com/wp/v2/sites/resilient.llc/posts/33"
    );

    const post = await res.json();
    console.log("post: ", post);
  } catch (err) {
    console.log("error: ", err);
  }

  return (
    <div className="">
      <h1>Resilient Demo</h1>
      {/* <p>Post ID: {post.id}</p>
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
    </div>
  );
}

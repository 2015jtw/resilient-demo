export default async function Home() {
  const res = await fetch(
    "https://public-api.wordpress.com/wp/v2/sites/brisklyperfect673e684357.wordpress.com/posts/10"
  );
  const post = await res.json();
  console.log("post: ", post);
  return (
    <div className="">
      <h1>Resilient Demo</h1>
      <p>Post ID: {post.id}</p>
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

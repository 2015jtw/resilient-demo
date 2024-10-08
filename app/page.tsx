export default async function Home() {
  const res = await fetch(
    "https://public-api.wordpress.com/wp/v2/sites/brisklyperfect673e684357.wordpress.com/posts/10"
  );
  const post = await res.json();
  console.log("post: ", post);
  return (
    <div className="">
      <h1>Resilient Demo</h1>
      {JSON.stringify(post.id)}
    </div>
  );
}

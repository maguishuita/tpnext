import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <p> My Next Started App</p>
      <hr />
      <Link href="/product">Products</Link>
      <br />
      <Link href="/about">About</Link>

    </div>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="notfound">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
      <br />
      <br />
      <Image src="/notfound.png" alt="" width={100} height={100} />
    </div>
  );
}

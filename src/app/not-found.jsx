import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <p>Page Not Found</p>
      <Link href="/">Back TO Home</Link>
    </div>
  );
}

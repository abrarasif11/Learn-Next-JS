"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p className="text-center text-3xl text-blue-600">About Page</p>
      <p>
        <Link href="/about/address">Address Page</Link>
      </p>
      <button type="button" onClick={handleNavigation}>
        Address Change
      </button>
    </div>
  );
}

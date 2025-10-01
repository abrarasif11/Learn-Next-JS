import React from "react";

export default async function AboutSlugs({ params }) {
  const p = await params;
  console.log(p);
  return (
    <div>
      <p>AboutSlugs</p>
    </div>
  );
}

"use client"; // onload ke liye hame "use client" ka use karna padega
import Script from "next/script";
export default function UserDetails() {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file loaded");
        }}
      />

      <h1>Hii this an user detailes page</h1>
    </div>
  );
}

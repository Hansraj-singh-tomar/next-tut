/** @type {import('next').NextConfig} */

// kisi domain se Images ko use karne ke liye
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "pixabay.com", "www.istockphoto.com"],
  },
};

// static file ko export karne ke liye
// const nextConfig = {
//   output: "export", // agar ye line nhi use karenge to static html file export nhi hogi
// }; // ye line use karne par dynamic routing ko use nhi kar pa rha tha

// // Redirection ke liye
// const nextConfig = {
//   redirects: async () => {
//     return [
//       { source: "/user", destination: "/", permanent: false },
//       { source: "/user/:userId", destination: "/", permanent: false },
//     ]; // agar koi /user page ko access karta hai to vo "/" home page par redirect ho jayega
//     // permanent: false means page exist karta hai but usme kuch kam chal rha hoga ye SEO ke liye hota hai
//   },
// };

module.exports = nextConfig;

// "use client";

// Fetching API data in Client Component
// import { useEffect, useState } from "react";

// export default function Page() {
//   const [product, setProduct] = useState([]);

//   const fetchData = async () => {
//     let data = await fetch("https://dummyjson.com/products");
//     data = await data.json();
//     console.log(data);
//     setProduct(data.products);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <>
//       <div>
//         <h1>Fetching API data in client component</h1>
//         {product.map((item) => {
//           return <h3 key={item.id}>{item.title}</h3>;
//         })}
//       </div>
//     </>
//   );
// }

// Fetching API data in Server Component
import Product from "./Product";
const fetchData = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  //   console.log(data); // ye vala console hame browser me dekhne ko nhi milega
  return data.products;
};

export default async function Page() {
  let products = await fetchData();
  return (
    <>
      <div>
        <h1>Fetching API data in Server Component</h1>
        {products.map((item) => {
          return (
            <>
              <h3 key={item.id}>Name: {item.title}</h3>
              <Product price={item.price} />
            </>
          );
        })}
      </div>
    </>
  );
}

"use client";
export default function Product({ price }) {
  return (
    <>
      <button onClick={() => alert(price)}>Check Price</button>
    </>
  );
}

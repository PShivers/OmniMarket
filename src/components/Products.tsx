import React from "react";

export default function Products() {
  let products = ["chair", "bed", "house", "sofa"];

  return (
    <div>
      <h1>Products</h1>
      {products.map((product, i) => (
        <div key={i}>{product}</div>
      ))}
    </div>
  );
}

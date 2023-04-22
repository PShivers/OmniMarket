import React from "react";

type Product = {
  product_id: number;
  product_name: string;
  style: string;
  category: string;
  imageUrl: string;
  description: string;
};

type ProductsProps = {
  products: Product[];
};

export default function Products({ products }: ProductsProps) {
  return (
    <div className="flex justify-evenly flex-wrap mt-5">
      {products.map((product) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-themeWhite mt-4"
          key={product.product_id}
        >
          <img
            className="w-full"
            src={product.imageUrl}
            alt={product.product_name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-gray-600 text-xl mb-2">
              {product.product_name}
            </div>
            <p className="text-gray-700 text-base">{product.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-themeWhite mr-2 mb-2">
              #{product.category}
            </span>
            <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-themeWhite mr-2 mb-2">
              #{product.style}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

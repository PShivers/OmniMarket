import React, { useEffect } from "react";
import { Product } from "@/interfaces";
import { useDispatch, useSelector } from "react-redux";
import {getProductsAsync, getProductByIdAsync} from "../redux/productSlice"

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state:{products: Product[]}) => state.products)

  useEffect(()=>{
    dispatch(getProductsAsync() as any);
  }, [dispatch])

  const handleClick = (e: React.MouseEvent<HTMLDivElement,MouseEvent> )=>{
    dispatch(getProductByIdAsync(e.currentTarget.dataset.index) as any);
  }

  return (
    <div className="flex justify-evenly flex-wrap mt-5">
      {products.map((product) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg bg-themeWhite mt-4"
          key={product.productId}
          data-index={product.productId.toString()}
          onClick={handleClick}
        >
          <img
            className="w-full"
            src={product.imageUrl}
            alt={product.productName}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-gray-600 text-xl mb-2">
              {product.productName}
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

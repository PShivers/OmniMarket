export interface Product {
  productId: number;
  productName: string;
  style: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface QueryResult {
  products: Product[];
}

export interface ProductsProps {
  products: Product[];
}

export function getProducts(): Promise<Product[]> {
  // Return a Promise that resolves with the products array
  return Promise.resolve(products);
}

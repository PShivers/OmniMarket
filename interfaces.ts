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
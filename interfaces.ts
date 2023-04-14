export interface Product {
    id: string;
    name: string;
    description: string;
  }

export interface QueryResult {
    products: Product[];
  }
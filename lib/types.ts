export type CartProduct = {
  title: string;
  tumbnailUrl: string;
  qty: number;
  unitPrice: number;
};

export type CartData = {
  createdAt: string;
  updatedAt: string;
  products: CartProduct[];
};

export type InstallmentData = {
  number: number;
  total: number;
  hasFee?: boolean;
};

export type Product = {
  code: string;
  title: string;
  amount: number;
  installments: InstallmentData;
};

export type ProductsSearchResult = {
  query: string | null;
  size: number;
  start: string;
  results: Product[];
};

export type QuantityChangedEvent = {
  product: CartProduct;
  newQty: number;
};

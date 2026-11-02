"use client";

import { useEffect, useState } from "react";

const PRODUCTS_URL = "http://127.0.0.1:5000/products";

const defaultProductImage = "/Juan-Franco3.JPG";

type InstallmentData = {
  number: number;
  total: number;
  hasFee: boolean;
};

type Product = {
  title: string;
  amount: number;
  installments: InstallmentData;
};

function Installment({ installment }: { installment: InstallmentData }) {
  const fees = installment.hasFee ? "com juros" : "sem juros";
  return (
    <p>
      em {installment.number}x de R$ {installment.total} {fees}
    </p>
  );
}

function ProductListItem({ product }: { product: Product }) {
  return (
    <div className="relative my-2 flex border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={defaultProductImage}
        alt={product.title}
        width={150}
        height={150}
        className="mr-3 shrink-0"
      />
      <div>
        <a href="#" className="after:absolute after:inset-0">
          <h3 className="mt-0">{product.title}</h3>
        </a>
        <h4>R$ {product.amount}</h4>
        <Installment installment={product.installments} />
      </div>
    </div>
  );
}

export default function ProductsForSaleList() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro ${response.status} ao buscar produtos`);
        }
        return response.json();
      })
      .then((json: Product[]) => {
        setProducts(json);
      })
      .catch((err: Error) => {
        setError(err);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Carregando...</div>;
  }
  return (
    <div>
      {products.map((product, index) => (
        <ProductListItem product={product} key={index} />
      ))}
    </div>
  );
}

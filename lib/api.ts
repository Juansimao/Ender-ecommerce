import { CARTS_URL, PRODUCTS_URL } from "./constants";
import type { CartData, CartProduct, ProductsSearchResult } from "./types";

export async function queryProducts(query: string): Promise<ProductsSearchResult> {
  return fetch(`${PRODUCTS_URL}?query=${encodeURIComponent(query)}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`Erro ${response.status} ao buscar produtos`);
      }
      return response.json();
    }
  );
}

export async function getCart(code: string): Promise<CartData> {
  return fetch(`${CARTS_URL}/${code}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Erro ${response.status} ao buscar carrinho`);
    }
    return response.json();
  });
}

export async function updateCart(
  code: string,
  products: CartProduct[]
): Promise<CartData> {
  return fetch(`${CARTS_URL}/${code}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(products),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Erro ${response.status} ao atualizar carrinho`);
    }
    return response.json();
  });
}

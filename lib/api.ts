import { PRODUCTS_URL } from "./constants";
import type { ProductsSearchResult } from "./types";

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

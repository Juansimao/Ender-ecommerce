import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ProductsForSaleList from "./ProductsForSaleList";
import { queryProducts } from "../lib/api";
import type { ProductsSearchResult } from "../lib/types";

function FilterableProductsForSaleList() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productsSearchResult, setProductsSearchResult] =
    useState<ProductsSearchResult>({
      query: null,
      size: 10,
      start: "",
      results: [],
    });

  function clientSideQueryProduct(query: string) {
    queryProducts(query).then(
      (json) => {
        setError(null);
        setIsLoaded(true);
        setProductsSearchResult(json);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }

  useEffect(() => {
    clientSideQueryProduct("");
  }, []);

  function handleOnSearch(query: string) {
    clientSideQueryProduct(query);
  }

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <div>Carregando...</div>;
  } else if (productsSearchResult.results.length === 0) {
    content = <div>Nenhum produto encontrado.</div>;
  } else {
    content = <ProductsForSaleList products={productsSearchResult.results} />;
  }

  return (
    <>
      <SearchBar onSearch={handleOnSearch} />
      <div className="mt-4">{content}</div>
    </>
  );
}

export default FilterableProductsForSaleList;

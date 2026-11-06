import FilterableProductsForSaleList from "../../components/FilterableProductsForSaleList";

export default function Products() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-semibold">Produtos</h1>
      <FilterableProductsForSaleList />
    </main>
  );
}

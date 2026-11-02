import ProductsForSaleList from "./product";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-semibold">Produtos</h1>
      <ProductsForSaleList />
    </main>
  );
}

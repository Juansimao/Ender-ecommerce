import Link from "next/link";
import FilterableProductsForSaleList from "../components/FilterableProductsForSaleList";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-semibold">Produtos</h1>
      <nav className="mb-4 flex gap-4 underline">
        <Link href="/cart">Carrinho</Link>
        <Link href="/orders">Pedidos</Link>
      </nav>
      <FilterableProductsForSaleList />
    </main>
  );
}

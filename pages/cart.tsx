import Cart from "../components/Cart";

export default function CartPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-center text-2xl font-semibold">
        CARRINHO DE COMPRAS
      </h1>
      <Cart />
    </main>
  );
}

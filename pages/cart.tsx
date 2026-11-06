import Cart from "../components/Cart";
import type { CartData } from "../lib/types";

const cart: CartData = {
  createdAt: "2022-01-01T14:38:33Z",
  updatedAt: "2022-01-01T14:38:33Z",
  products: [
    {
      title: "Caneca Personalizada de Porcelana",
      tumbnailUrl: "http://meu-ecommerce.com/img/pr/tb-pers-porc.jpg",
      qty: 1,
      unitPrice: 123.45,
    },
    {
      title: "Caneca Importada Personalizada em Diversas Cores",
      tumbnailUrl: "http://meu-ecommerce.com/img/pr/tb-import-colors.jpg",
      qty: 2,
      unitPrice: 123.45,
    },
    {
      title: "Caneca de Tulipa",
      tumbnailUrl: "http://meu-ecommerce.com/img/pr/tb-tuli.jpg",
      qty: 1,
      unitPrice: 123.45,
    },
  ],
};

export default function CartPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-center text-2xl font-semibold">
        CARRINHO DE COMPRAS
      </h1>
      <Cart cart={cart} />
    </main>
  );
}

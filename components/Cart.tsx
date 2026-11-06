import { useState } from "react";
import Link from "next/link";
import ItemsList from "./ItemsList";
import Summary from "./Summary";
import type { CartData, QuantityChangedEvent } from "../lib/types";

function Cart(props: { cart: CartData }) {
  const [products, setProducts] = useState(props.cart.products);

  function handleQuantityChanged(event: QuantityChangedEvent) {
    const newQty = Math.max(1, event.newQty);
    setProducts(
      products.map((p) => (p === event.product ? { ...p, qty: newQty } : p))
    );
  }

  return (
    <div>
      <hr />
      <ItemsList products={products} onQuantityChanged={handleQuantityChanged} />
      <hr />
      <Summary products={products} />
      <div className="mt-4 text-right">
        <Link
          href="/orders/123"
          className="inline-block bg-zinc-900 px-6 py-2 text-white"
        >
          Fechar pedido
        </Link>
      </div>
    </div>
  );
}

export default Cart;

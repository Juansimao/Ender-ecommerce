import { useEffect, useState } from "react";
import Link from "next/link";
import ItemsList from "./ItemsList";
import Summary from "./Summary";
import { getCart, updateCart } from "../lib/api";
import { FIXED_CART_CODE } from "../lib/constants";
import type { CartProduct, QuantityChangedEvent } from "../lib/types";

function Cart() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    getCart(FIXED_CART_CODE).then(
      (json) => {
        setIsLoaded(true);
        setProducts(json.products);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  function onQuantityChanged(ev: QuantityChangedEvent) {
    const newQty = Math.max(1, ev.newQty);
    const updatedProducts = products.map((x) =>
      x.code === ev.product.code ? { ...x, qty: newQty } : x
    );
    setProducts(updatedProducts);
    updateCart(FIXED_CART_CODE, updatedProducts).then(
      () => setError(null),
      (error) => setError(error)
    );
  }

  if (!isLoaded) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {error && <div className="mb-2 text-red-600">Error: {error.message}</div>}
      <hr />
      <ItemsList products={products} onQuantityChanged={onQuantityChanged} />
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

import { formatPrice } from "../lib/format";
import type { CartProduct } from "../lib/types";

function Summary(props: { products: CartProduct[] }) {
  const subtotal = props.products
    .map((x) => x.unitPrice * x.qty)
    .reduce((prev, e) => prev + e, 0);

  return (
    <div className="grid grid-cols-12 items-center gap-2">
      <div className="col-span-6"></div>
      <div className="col-span-4 text-right">SUBTOTAL</div>
      <div className="col-span-2 text-right">
        <h5>R$ {formatPrice(subtotal)}</h5>
      </div>
    </div>
  );
}

export default Summary;

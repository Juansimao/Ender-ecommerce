import Link from "next/link";
import Installment from "./Installment";
import { DEFAULT_PRODUCT_IMAGE } from "../lib/constants";
import { formatPrice } from "../lib/format";
import type { Product } from "../lib/types";

function ProductListItem(props: { product: Product }) {
  return (
    <div className="relative my-2 flex border">
      <img
        src={DEFAULT_PRODUCT_IMAGE}
        alt={props.product.title}
        width={150}
        height={150}
        className="mr-3 size-37.5 shrink-0 object-cover"
      />
      <div>
        <Link
          href={`/products/${props.product.code}`}
          className="after:absolute after:inset-0"
        >
          <h3 className="mt-0">{props.product.title}</h3>
        </Link>
        <h4>R$ {formatPrice(props.product.amount)}</h4>
        <Installment installment={props.product.installments} />
      </div>
    </div>
  );
}

export default ProductListItem;

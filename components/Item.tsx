import ItemQuantity from "./ItemQuantity";
import { DEFAULT_PRODUCT_IMAGE } from "../lib/constants";
import { formatPrice } from "../lib/format";
import type { CartProduct, QuantityChangedEvent } from "../lib/types";

type Props = {
  product: CartProduct;
  onQuantityChanged: (event: QuantityChangedEvent) => void;
};

function Item(props: Props) {
  return (
    <div className="my-2 grid grid-cols-12 items-center gap-2">
      <div className="col-span-2">
        <img
          src={DEFAULT_PRODUCT_IMAGE}
          alt={props.product.title}
          className="size-24 border object-cover"
        />
      </div>
      <div className="col-span-6">
        <h5>{props.product.title}</h5>
      </div>
      <div className="col-span-2">
        <ItemQuantity
          product={props.product}
          onQuantityChanged={props.onQuantityChanged}
        />
      </div>
      <div className="col-span-2 text-right">
        <h4>R$ {formatPrice(props.product.unitPrice * props.product.qty)}</h4>
      </div>
    </div>
  );
}

export default Item;

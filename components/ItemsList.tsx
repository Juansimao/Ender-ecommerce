import Item from "./Item";
import type { CartProduct, QuantityChangedEvent } from "../lib/types";

type Props = {
  products: CartProduct[];
  onQuantityChanged: (event: QuantityChangedEvent) => void;
};

function ItemsList(props: Props) {
  const rows: React.ReactNode[] = [];

  props.products.forEach((product) => {
    rows.push(
      <Item
        key={product.code}
        product={product}
        onQuantityChanged={props.onQuantityChanged}
      />
    );
  });

  return <div>{rows}</div>;
}

export default ItemsList;

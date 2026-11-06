import type { CartProduct, QuantityChangedEvent } from "../lib/types";

type Props = {
  product: CartProduct;
  onQuantityChanged: (event: QuantityChangedEvent) => void;
};

const buttonClass = "border border-zinc-400 px-3 py-1 hover:bg-zinc-100";

function ItemQuantity(props: Props) {
  function buildQuantityEventChanged(increment: number) {
    return {
      product: props.product,
      newQty: props.product.qty + increment,
    };
  }

  function decrement() {
    props.onQuantityChanged(buildQuantityEventChanged(-1));
  }

  function increment() {
    props.onQuantityChanged(buildQuantityEventChanged(+1));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onQuantityChanged(
      buildQuantityEventChanged(Number(e.target.value) - props.product.qty)
    );
  }

  return (
    <div className="mb-3 flex">
      <button className={buttonClass} type="button" onClick={decrement}>
        -
      </button>
      <input
        type="number"
        className="w-16 border-y border-zinc-400 text-center"
        value={props.product.qty}
        onChange={handleChange}
      />
      <button className={buttonClass} type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default ItemQuantity;

import ProductListItem from "./ProductListItem";
import type { Product } from "../lib/types";

function ProductsForSaleList(props: { products: Product[] }) {
  const products = props.products.map((x) => (
    <ProductListItem product={x} key={x.code} />
  ));
  return <div>{products}</div>;
}

export default ProductsForSaleList;

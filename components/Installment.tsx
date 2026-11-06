import { formatPrice } from "../lib/format";
import type { InstallmentData } from "../lib/types";

function Installment(props: { installment: InstallmentData }) {
  const fees = props.installment.hasFee ? "com juros" : "sem juros";
  return (
    <p className="text-sm">
      em {props.installment.number}x de R$ {formatPrice(props.installment.total)}{" "}
      {fees}
    </p>
  );
}

export default Installment;

import Link from "next/link";
import { useRouter } from "next/router";

export default function OrderDetail() {
  const router = useRouter();
  const { code } = router.query;

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 text-center">
      <h1 className="mb-4 text-2xl font-semibold">PEDIDO FINALIZADO 🎉</h1>
      <p className="mb-2">Pedido {code}</p>
      <p className="mb-6">
        O seu pedido foi finalizado com sucesso. Agora, o seu carrinho está
        vazio. Na verdade, essa é uma aplicação de exemplo e nenhum pedido será
        entregue.
      </p>
      <Link href="/products" className="inline-block bg-zinc-200 px-6 py-2">
        Ver mais produtos
      </Link>
    </main>
  );
}

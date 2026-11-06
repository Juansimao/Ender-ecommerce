import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { code } = router.query;

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-semibold">Produto {code}</h1>
    </main>
  );
}

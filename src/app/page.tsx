import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-4 gap-10 p-10">
      {Array.from(new Array(30)).map((_, i) => (
        <ProductCard
          key={i}
          href="#"
          image="https://placehold.co/200x200"
          price={`$${i * 5}`}
          title={`Product ${i}`}
        />
      ))}
    </main>
  );
}

import { ProductCard } from "@/components/ProductCard";

export default function (props: { params: { category: string } }) {
  return (
    <main className="min-h-screen flex flex-col">
      <h1 className="font-bold text-[30px] font-raleway px-10 pt-5">
        Products listed under {props.params.category} category:
      </h1>
      <div className="grid grid-cols-4 gap-10 p-10">
        {Array.from(new Array(30)).map((_, i) => (
          <ProductCard
            key={i}
            href="#"
            image="https://placehold.co/200x200"
            price={`$${i * 5}`}
            title={`Product ${i}`}
          />
        ))}
      </div>
    </main>
  );
}

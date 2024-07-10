import Link from "next/link";
import { twMerge } from "tailwind-merge";

export interface ProductCardProps {
  href: string;
  title: string;
  price: string;
  image: string;
  discount?: string;
}

export function ProductCard(props: ProductCardProps) {
  return (
    <Link
      href={props.href}
      className={twMerge(
        "transition-all duration-500 w-[300px] gap-4 h-fit border rounded-lg shadow-lg flex flex-col",
        "hover:scale-[1.03] hover:no-underline"
      )}
    >
      <img className="w-full object-cover" src={props.image} />
      <div className="px-5 py-3 gap-2 w-full flex flex-col">
        <h3 className="font-raleway ">{props.title}</h3>

        <div className="flex w-full">
          <h4 className="font-bold text-[22px]">{props.price}</h4>
        </div>
      </div>
    </Link>
  );
}

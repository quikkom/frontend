import Link from "next/link";
import { twMerge } from "tailwind-merge";

const categories = [
  {
    label: "Electronics",
    href: "electronics",
  },
  {
    label: "Home and Kitchen",
    href: "home-and-kitchen",
  },
  {
    label: "Sports and Outdoors",
    href: "sports-and-outdoors",
  },
  {
    label: "Toys and Games",
    href: "toys-and-games",
  },
  {
    label: "Books",
    href: "books",
  },
  {
    label: "Automotive",
    href: "automotive",
  },
  {
    label: "Groceries",
    href: "groceries",
  },
  {
    label: "Jewelry",
    href: "jewelry",
  },
];

export default function () {
  return (
    <nav className="w-screen flex flex-col border-b ">
      <div className="w-full flex justify-between items-center px-5">
        <div
          className={twMerge(
            "flex gap-1 items-center font-raleway font-semibold"
          )}
        >
          <img src="/logo.png" className="w-[100px] h-[100px]" />
          <div className="text-[30px]">Quikkom</div>
        </div>
        <div className="flex w-[50%] items-center gap-3">
          <input
            placeholder="Start typing to search..."
            className={twMerge(
              "transition-all duration-500 border p-2 w-full outline-none rounded-md border-black/40",
              "focus-visible:border-primary-hover"
            )}
          />
          <button className={twMerge("py-2 button-primary")}>Search</button>
        </div>
        <div className={twMerge("flex gap-3")}>
          <button className="button-primary">Login</button>
          <button className="">Sign up</button>
        </div>
      </div>
      <ul className="w-full flex justify-evenly px-10 py-3">
        {categories.map((category, i) => (
          <li key={i} className={twMerge("font-raleway", "hover:underline")}>
            <Link href={`/products/${category.href}`}>{category.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

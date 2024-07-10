import { twMerge } from "tailwind-merge";

const categories = [
  "Electronics",
  "Home and Kitchen",
  "Sports and Outdoors",
  "Groceries",
  "Jewelry",
];

export default function () {
  return (
    <footer className="w-full bg-primary-300 flex flex-col border-t border-t-black/30">
      <div className="flex justify-evenly  py-10">
        <img className="w-[10%] h-[10%]" src="/logo.png" />
        <div className="flex flex-col gap-2">
          <h4 className="font-raleway text-[20px] font-bold">Categories</h4>
          <ul className="flex flex-col gap-2">
            {categories.map((category, i) => (
              <li key={i} className="font-raleway">
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-raleway text-[20px] font-bold">Contact</h4>
          <ul className="flex flex-col gap-2">
            <a href="#">info@quikkom.com</a>
            <a href="#">+00 000 000 00 00</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-center border-t border-t-black/20 font-raleway">
        Quikkom © 2024
      </div>
    </footer>
  );
}

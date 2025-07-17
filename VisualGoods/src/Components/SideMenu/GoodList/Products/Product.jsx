import { AddGoodsButton } from "./AddGoodsButton";

export function Product({ filteredTowary }) {
  if (filteredTowary.length === 0) {
    return (
      <p className="flex justify-center font-bold text-gray-500 italic">
        Brak wyników
      </p>
    );
  }

  return filteredTowary.map((towar, index) => (
    <div
      className="flex h-[40px] min-h-[40px] items-center justify-center border-b-1 bg-slate-100 text-black hover:bg-slate-200"
      key={index}
    >
      {towar.nazwa}
      <AddGoodsButton productsName={towar.nazwa} />
    </div>
  ));
}

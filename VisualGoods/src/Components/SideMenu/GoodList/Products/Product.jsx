import { AddGoodsButton } from "./AddGoodsButton";

export function Product() {
  // Do zmiany tak nie bedzie to wygladc
  const listaTowwarów = ["Porotherm 12", "Porotherm 24", "Silka 12"];

  return listaTowwarów.map((towar, index) => (
    <div
      className="flex h-[40px] min-h-[40px] items-center justify-center border-b-1 bg-slate-100 text-black hover:bg-slate-200"
      key={index}
    >
      {towar}
      <AddGoodsButton productsName={towar} />
    </div>
  ));
}

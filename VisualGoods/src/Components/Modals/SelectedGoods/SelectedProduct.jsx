import { FaMinusSquare } from "react-icons/fa";
import { SelectedProductsListContext } from "../../../context/SelectedProductsListContext";
import { useContext } from "react";

export function SelectedProduct() {
  const [goodsForVisualisation] = useContext(SelectedProductsListContext);

  return (
    <>
      {goodsForVisualisation.map((userGoods, index) => (
        <div
          className="grid h-10 max-h-10 w-full grid-cols-[70%_15%_15%] items-center justify-between border-b-black bg-slate-100 p-1 text-black hover:bg-slate-200"
          key={index}
        >
          <p className="ml-2">{userGoods.nazwa}</p>

          <input
            type="number"
            min="1"
            max="10"
            defaultValue={1}
            className="w-10 rounded-sm border border-black bg-slate-200 text-center"
          />

          <FaMinusSquare
            color="red"
            className="ml-auto hover:cursor-pointer"
            title="Usuń"
          />
        </div>
      ))}
    </>
  );
}

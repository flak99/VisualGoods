import { FaMinusSquare } from "react-icons/fa";
import { useContext } from "react";
import { SelectedProductsListContext } from "../../../context/SelectedProductsListContext";
import { SummaryElementsValue } from "../../../context/SummaryElementsValue";

export function SelectedProduct() {
  const [goodsForVisualisation, setGoodsForVisualisation] = useContext(
    SelectedProductsListContext,
  );

  const [summary, setSummary] = useContext(SummaryElementsValue);

  const usunProduct = (deleteID) => {
    setGoodsForVisualisation((prev) =>
      prev.filter((p) => p.nazwa !== deleteID),
    );
  }; // Ważne do notatek

  const showElemnetsSummary = (id, value) => {
    setSummary((prev) => ({ ...prev, [id]: value }));

    console.log(summary);
  };

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
            value={summary[userGoods.id] || 0}
            onChange={(e) => showElemnetsSummary(userGoods.id, e.target.value)}
            className="w-10 rounded-sm border border-black bg-slate-200 text-center"
          />
          <button>
            <FaMinusSquare
              color="red"
              className="ml-auto hover:cursor-pointer"
              title="Usuń"
              onClick={() => usunProduct(userGoods.nazwa)}
            />
          </button>
        </div>
      ))}
    </>
  );
}

import { useContext } from "react";
import { SelectedProductsListContext } from "../../../context/SelectedProductsListContext";
import { SummaryElementsValue } from "../../../context/SummaryElementsValue";

export function SubmitGoodsButton() {
  const buttonView =
    "mx-auto block h-10 w-[30%] justify-center rounded-lg border-2 border-[#589C10] bg-slate-50 text-center font-bold text-[#589C10] uppercase transition-all duration-300 hover:cursor-pointer hover:bg-[#589C10] hover:text-slate-50";

  const [selectedProducts] = useContext(SelectedProductsListContext);
  const [summaryElements] = useContext(SummaryElementsValue);

  function ShowElementsSummary() {
    console.log("#### SUBMIT GOODS ###");

    selectedProducts.forEach((product, index) => {
      console.log(`Produkt ${index + 1}:`, product.nazwa);
    });

    selectedProducts.forEach((product) => {
      let quantity;
      const includeID = Object.keys(summaryElements).includes(product.id);
      if (includeID) {
        quantity = summaryElements[product.id];
      }

      console.log(`### Ilość ${product.nazwa}:`, quantity);
    });
  }

  return (
    <button onClick={() => ShowElementsSummary()} className={buttonView}>
      Potwierdz
    </button>
  );
}

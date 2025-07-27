import { FaMinusSquare } from "react-icons/fa";

const selectedProductList = [];

export function SelectedProduct() {
  return selectedProductList.map((selectedProduct, index) => (
    <div
      className="grid h-10 max-h-10 w-[100%] grid-cols-[70%_15%_15%] items-center justify-between border-b-black bg-slate-100 p-1 text-black hover:bg-slate-200"
      key={index}
    >
      <p className="ml-2">{selectedProduct}</p>
      <input
        type="number"
        min="1"
        max="10"
        defaultValue={1}
        className="w-10 rounded-sm border-1 border-black bg-slate-200 text-center"
      ></input>
      <FaMinusSquare
        color="red"
        className="ml-auto hover:cursor-pointer"
        title="Usuń"
      />
    </div>
  ));
}

// Pamietac o FaThermometerEmpty, aby spradzic ak sie wystwle
// poprze gotowe komponenty (film z kursu)

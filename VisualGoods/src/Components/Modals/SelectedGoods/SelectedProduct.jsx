import { FaGreaterThanEqual, FaMinusSquare } from "react-icons/fa";

export function SelectedProduct() {
  return (
    <div className="place-between flex h-10 w-[100%] items-center justify-around bg-slate-100 text-black">
      <p>Porotherm 25</p>
      <input
        type="number"
        min="1"
        max="10"
        className="w-10 rounded-sm border-1 border-black bg-slate-200"
      ></input>
      <FaMinusSquare color="red" />
    </div>
  );
}

// Pamietac o FaThermometerEmpty, aby spradzic ak sie wystwle
// poprze gotowe komponenty (film z kursu)

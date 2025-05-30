import { FaPlusSquare } from "react-icons/fa";

export function AddGoodsButton({ productsName }) {
  const colorForButton = "#589C10";

  return (
    <button
      onClick={() => alert(productsName)}
      className="mr-2 ml-auto h-5 w-5 hover:cursor-pointer"
    >
      <FaPlusSquare color={colorForButton} size={20} />
    </button>
  );
}

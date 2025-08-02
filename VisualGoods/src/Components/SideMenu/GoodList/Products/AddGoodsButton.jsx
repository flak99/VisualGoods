import { useContext } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { SelectedProductsListContext } from "../../../../context/SelectedProductsListContext";

export function AddGoodsButton({ productsName }) {
  const colorForButton = "#589C10";

  const [, setAddedGoods] = useContext(SelectedProductsListContext);

  function onHandleAddProduct(towar) {
    setAddedGoods((prev) => [...prev, towar]);
  }

  return (
    <button
      onClick={() => onHandleAddProduct(productsName)}
      className="mr-2 ml-auto h-5 w-5 hover:cursor-pointer"
    >
      <FaPlusSquare color={colorForButton} size={20} title="Dodaj towar" />
    </button>
  );
}

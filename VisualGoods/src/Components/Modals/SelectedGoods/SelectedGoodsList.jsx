import { SelectedProduct } from "./SelectedProduct";

export function SelectedGoodsList() {
  return (
    <div className="m-2 flex h-[70%] flex-col overflow-auto">
      <SelectedProduct />
    </div>
  );
}

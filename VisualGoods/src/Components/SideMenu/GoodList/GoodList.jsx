import { InfoButton } from "../InfoButton";
import { SearchInput } from "../SearchInput";
import { Product } from "./Products/Product";

export function GoodList() {
  return (
    <>
      <div className="m-auto mt-6 flex h-screen w-[87.5%] flex-col rounded-2xl bg-slate-50">
        <SearchInput />
        <div className="flex h-[600px] max-h-[600px] w-full flex-col overflow-auto bg-slate-50">
          <Product />
        </div>
        <div className="flex h-[12.5%] w-full items-center justify-around">
          <InfoButton buttonText={"Lista Pojazdów"} />
          <InfoButton buttonText={"Lista Towarów"} />
        </div>
      </div>
    </>
  );
}

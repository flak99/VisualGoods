import { useState } from "react";
import { InfoButton } from "../InfoButton";
import { SearchInput } from "../SearchInput";
import { Product } from "./Products/Product";
import towary from "/Projekty/JavaScript/VisualGoods/VisualGoods/src/assets/data.json";

export function GoodList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTowary = towary.filter((towar) =>
    towar.nazwa.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className="m-auto mt-6 flex h-screen w-[87.5%] flex-col rounded-2xl bg-slate-50">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="flex h-[600px] max-h-[600px] w-full flex-col overflow-auto bg-slate-50">
          <Product filteredTowary={filteredTowary} towary={towary} />
        </div>
        <div className="flex h-[12.5%] w-full items-center justify-around">
          <InfoButton buttonText={"Lista Pojazdów"} />
          <InfoButton buttonText={"Lista Towarów"} />
        </div>
      </div>
    </>
  );
}

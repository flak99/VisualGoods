import { InfoButton } from "./InfoButton";
import { SearchInput } from "./SearchInput";

export function GoodList() {
  return (
    <>
      <div className="m-auto flex h-screen w-7/8 flex-col rounded-2xl bg-slate-50">
        <SearchInput />
        <div className="flex h-15/20 w-full bg-slate-50"></div>
        <div className="flex h-1/8 w-full items-center justify-around">
          <InfoButton buttonText={"Lista Pojazdów"} />
          <InfoButton buttonText={"Lista Towrów"} />
        </div>
      </div>
    </>
  );
}

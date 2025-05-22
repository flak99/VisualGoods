import { ImShrink2 } from "react-icons/im";
export function ShrinkButton({ hidding }) {
  return (
    <>
      <button
        onClick={hidding}
        className="m-3 ml-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-blue-300"
      >
        <ImShrink2 color="black" size={20} />
      </button>
    </>
  );
}

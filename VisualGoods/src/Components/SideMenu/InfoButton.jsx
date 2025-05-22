export function InfoButton({ buttonText }) {
  return (
    <button className="flex h-15 w-1/3 items-center justify-center rounded-lg border-2 border-gray-700 text-center font-bold text-gray-700 transition-all duration-200 hover:cursor-pointer hover:bg-gray-700 hover:text-slate-50">
      {buttonText}
    </button>
  );
}

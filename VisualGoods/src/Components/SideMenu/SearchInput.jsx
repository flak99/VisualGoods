export function SearchInput({ searchTerm, setSearchTerm }) {
  return (
    <input
      placeholder="Wyszukaj towar"
      type="text"
      className="mb-6 h-1/20 w-full border-b-3 border-gray-700 bg-slate-50 text-center font-bold text-black placeholder-gray-700 transition-all duration-300 hover:border-gray-500 focus:border-gray-700 focus:placeholder-slate-50 focus:outline-none"
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
    />
  );
}

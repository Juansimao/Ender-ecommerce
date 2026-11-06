import { useState } from "react";

function SearchBar(props: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  function searchProducts() {
    props.onSearch(query);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      searchProducts();
    }
  }

  return (
    <div className="flex gap-3">
      <div className="flex-1">
        <input
          type="text"
          className="w-full border border-zinc-300 bg-zinc-100 px-3 py-2"
          placeholder="Buscar produtos, marcas e muito mais..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <button
          className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          onClick={searchProducts}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

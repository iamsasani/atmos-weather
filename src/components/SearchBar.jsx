function SearchBar({ city, setCity, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-16">
      <label
        htmlFor="city"
        className="mb-3 block text-sm text-black/50"
      >
        Search location
      </label>

      <div className="flex items-center border-b border-black/20 py-3">
        <span className="mr-3 text-lg text-black/40">
          ⌕
        </span>

        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a city..."
          className="w-full bg-transparent text-lg outline-none placeholder:text-black/30"
        />
      </div>
    </form>
  );
}

export default SearchBar;

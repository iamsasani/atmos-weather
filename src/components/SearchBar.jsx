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
        className="mb-3 block text-sm text-black/50 dark:text-white/50"
      >
        Search location
      </label>

      <div className="flex items-center gap-3">
        {/* Input */}
        <div
          className="
            flex
            flex-1
            items-center
            border-b
            border-black/20
            py-3
            dark:border-white/20
          "
        >
          <span className="mr-3 text-lg text-black/40 dark:text-white/40">
            ⌕
          </span>

          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter a city..."
            className="
              w-full
              bg-transparent
              text-lg
              text-black
              outline-none
              placeholder:text-black/30
              dark:text-white
              dark:placeholder:text-white/30
            "
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          aria-label="Search"
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            text-black/70
            transition
            hover:bg-black/5
            hover:text-black
            active:scale-95

            dark:border-white/10
            dark:text-white/70
            dark:hover:bg-white/10
            dark:hover:text-white
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
``

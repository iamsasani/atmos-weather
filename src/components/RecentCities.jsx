
function RecentCities({ cities, onSelect, onClear }) {
  if (cities.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
          Recent searches
        </p>

        <button
          type="button"
          onClick={onClear}
          className="text-xs text-black/30 transition hover:text-black/60"
        >
          Clear
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {cities.map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => onSelect(city)}
            className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/60 transition hover:border-black/20 hover:bg-black/[0.03] hover:text-black"
          >
            {city}
          </button>
        ))}
      </div>
    </section>
  );
}

export default RecentCities;


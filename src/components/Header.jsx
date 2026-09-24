
function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-lg font-semibold tracking-tight">
        ATMOS
      </h1>

      <button
        type="button"
        aria-label="Toggle theme"
        className="text-xl text-black/70 transition hover:text-black"
      >
        ☾
      </button>
    </header>
  );
}

export default Header;


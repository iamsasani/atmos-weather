import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherStats from "./components/WeatherStats";
import RecentCities from "./components/RecentCities";
import Footer from "./components/Footer";

import { getWeather } from "./services/weatherApi";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [recentCities, setRecentCities] = useState(() => {
    try {
      const savedCities = localStorage.getItem("recentCities");

      return savedCities ? JSON.parse(savedCities) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", isDark);

    root.style.colorScheme = isDark ? "dark" : "light";

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleSearch = async (cityName = city) => {
    const trimmedCity = cityName.trim();

    if (!trimmedCity) return;

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(trimmedCity);

      setWeather(data);
      setCity(trimmedCity);

      setRecentCities((prevCities) => {
        const updatedCities = [
          trimmedCity,
          ...prevCities.filter(
            (item) =>
              item.toLowerCase() !== trimmedCity.toLowerCase()
          ),
        ].slice(0, 5);

        localStorage.setItem(
          "recentCities",
          JSON.stringify(updatedCities)
        );

        return updatedCities;
      });
    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClearRecentCities = () => {
    localStorage.removeItem("recentCities");
    setRecentCities([]);
  };

  return (
    <main
      className="
        min-h-screen
        bg-[#f7f7f5]
        text-[#111111]
        transition-colors
        duration-300

        dark:bg-[#111111]
        dark:text-[#f5f5f5]
      "
    >
      <div className="mx-auto max-w-5xl px-6 py-8 md:px-10">

        <Header
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
        />

        <section className="flex min-h-[80vh] flex-col items-center justify-center">
          <div className="w-full max-w-xl">

            <SearchBar
              city={city}
              setCity={setCity}
              onSearch={() => handleSearch()}
            />

            <RecentCities
              cities={recentCities}
              onSelect={(selectedCity) => {
                setCity(selectedCity);
                handleSearch(selectedCity);
              }}
              onClear={handleClearRecentCities}
            />

            {/* Loading */}
            {loading && (
              <div className="py-10 text-center">
                <p className="text-sm text-black/40 dark:text-white/40">
                  Searching...
                </p>
              </div>
            )}

            {/* Error */}
            {!loading && error && (
              <div className="py-10 text-center">
                <p className="text-sm text-red-500 dark:text-red-400">
                  {error}
                </p>
              </div>
            )}

            {/* Weather */}
            {!loading && weather && (
              <>
                <CurrentWeather weather={weather} />
                <WeatherStats weather={weather} />
              </>
            )}

            {/* Empty state */}
            {!loading && !weather && !error && (
              <div className="py-16 text-center">
                <p className="text-4xl">
                  ☁️
                </p>

                <p className="mt-4 text-sm text-black/40 dark:text-white/40">
                  Search for a city to see the weather
                </p>
              </div>
            )}

          </div>
        </section>

        <Footer />

      </div>
    </main>
  );
}

export default App;
function WeatherStats({ weather }) {
  if (!weather) return null;

  return (
    <section className="mt-16 grid grid-cols-3 border-y border-black/10 py-6">

      <div className="text-center">
        <p className="text-xs uppercase tracking-wider text-black/40">
          Feels like
        </p>

        <p className="mt-2 font-medium">
          {Math.round(weather.main.feels_like)}°
        </p>
      </div>

      <div className="border-x border-black/10 text-center">
        <p className="text-xs uppercase tracking-wider text-black/40">
          Humidity
        </p>

        <p className="mt-2 font-medium">
          {weather.main.humidity}%
        </p>
      </div>

      <div className="text-center">
        <p className="text-xs uppercase tracking-wider text-black/40">
          Wind
        </p>

        <p className="mt-2 font-medium">
          {weather.wind.speed} m/s
        </p>
      </div>

    </section>
  );
}

export default WeatherStats;


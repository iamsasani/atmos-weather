function CurrentWeather({ weather }) {
  if (!weather) return null;

  const temperature = Math.round(weather.main.temp);
  const description = weather.weather[0].description;
  const icon = weather.weather[0].icon;

  return (
    <section className="text-center">

      <p className="text-sm text-black/40">
        {weather.name}, {weather.sys.country}
      </p>

      <div className="my-8 flex justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={description}
          className="h-28 w-28"
        />
      </div>

      <div className="flex items-start justify-center">
        <span className="text-8xl font-semibold tracking-tighter">
          {temperature}
        </span>

        <span className="mt-2 text-3xl">
          °
        </span>
      </div>

      <p className="mt-4 text-lg text-black/50 capitalize">
        {description}
      </p>

    </section>
  );
}

export default CurrentWeather;


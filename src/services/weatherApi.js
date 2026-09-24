
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric&lang=en`
  );

  if (response.status === 404) {
    throw new Error("City not found");
  }

  if (!response.ok) {
    throw new Error("Something went wrong. Please try again.");
  }

  return response.json();
}


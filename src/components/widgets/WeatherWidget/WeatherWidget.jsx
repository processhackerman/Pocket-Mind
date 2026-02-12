import "./WeatherWidget.scss";
import map_icon from "../../../assets/icons/map-flag.png";

export default function WeatherWidget({ weather }) {
  const normalizedName = weather.condition.toLowerCase();
  const iconPath = `${import.meta.env.BASE_URL}icons/${normalizedName}.svg`;

  return (
    <div className="weather-widget flex flex-col justify-between rounded-widget">
      <div className="weather-widget__header grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] justify-between items-end mt-1">
        <div className="weather-widget__location-group flex justify-start items-center opacity-60 gap-[0.5vw]">
          <div className="weather-widget__location-icon h-auto">
            <img
              src={map_icon}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="weather-widget__location-text">
            {weather.location}
          </div>
        </div>

        <div className="weather-widget__condition font-semibold">
          {weather.condition}
        </div>

        <div className="weather-widget__weather-icon justify-self-end h-auto aspect-square">
          <img src={iconPath} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="weather-widget__temperature flex items-start font-semibold mt-1 leading-none">
        <span>{weather.currentTemp}&deg;</span>
      </div>

      <div className="weather-widget__info flex justify-between items-stretch">
        <div className="weather-widget__item weather-widget__item--wind">
          <p className="weather-widget__label">Wind</p>
          <span className="weather-widget__value">
            15<span className="weather-widget__unit">km</span>
          </span>
        </div>
        <div className="weather-widget__item weather-widget__item--humidity">
          <p className="weather-widget__label">Humidity</p>
          <span className="weather-widget__value">
            32<span className="weather-widget__unit">%</span>
          </span>
        </div>
        <div className="weather-widget__item weather-widget__item--drizzle">
          <p className="weather-widget__label">Drizzle</p>
          <span className="weather-widget__value">
            87<span className="weather-widget__unit">%</span>
          </span>
        </div>
      </div>

      <div className="weather-widget__quote font-semibold min-h-[13%] flex items-center justify-center px-0 rounded-widget w-full mt-3 backdrop-blur-sm">
        {weather.quote}
      </div>
    </div>
  );
}

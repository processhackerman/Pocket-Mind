import "./WeatherWidget.scss";
import map_icon from "../../../assets/icons/map-flag.png";

export default function WeatherWidget({ weather }) {
  const normalizedName = weather.condition.toLowerCase();
  const iconPath = `${import.meta.env.BASE_URL}icons/${normalizedName}.svg`;

  return (
    <div className="weather-widget flex flex-col justify-between">
      <div className="weather-widget__header grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] justify-between items-end">
        <div className="weather-widget__location-group flex justify-start items-center opacity-60 g-[2px]">
          <div className="weather-widget__location-icon w-2.5 h-auto">
            <img
              src={map_icon}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="weather-widget__location-text text-xs">
            {weather.location}
          </div>
        </div>

        <div className="weather-widget__condition font-semibold">
          {weather.condition}
        </div>

        <div className="weather-widget__weather-icon justify-self-end w-9 h-9">
          <img src={iconPath} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="weather-widget__temperature flex items-start font-semibold text-7xl mt-1 leading-none">
        <span>{weather.currentTemp}</span>
        <span className="mt-1 text-5xl">&deg;</span>
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

      <div className="weather-widget__quote text-tiny font-semibold text-center p-2 px-0 rounded-xl w-full mt-3 backdrop-blur-sm">
        {weather.quote}
      </div>
    </div>
  );
}

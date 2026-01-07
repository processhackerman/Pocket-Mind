import "./WeatherWidget.scss";
import map_icon from "../../../assets/icons/map-flag.png";

export default function WeatherWidget({ weather }) {
    const normalizedName = weather.condition.toLowerCase();
    const iconPath = `${import.meta.env.BASE_URL}icons/${normalizedName}.svg`;

    return (
        <div className="weather-widget">
            <div className="weather-widget__header">
                <div className="weather-widget__location-group">
                    <div className="weather-widget__location-icon">
                        <img src={map_icon} alt="" />
                    </div>
                    <div className="weather-widget__location-text">
                        {weather.location}
                    </div>
                </div>

                <div className="weather-widget__condition">
                    {weather.condition}
                </div>

                <div className="weather-widget__weather-icon">
                    <img src={iconPath} alt="" />
                </div>
            </div>

            <div className="weather-widget__temperature">
                <span>{weather.currentTemp}</span>
                <span>&deg;</span>
            </div>

            <div className="weather-widget__info">
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

            <div className="weather-widget__quote">{weather.quote}</div>
        </div>
    );
}

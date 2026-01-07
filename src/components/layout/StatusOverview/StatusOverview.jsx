import WeatherWidget from "../../widgets/WeatherWidget/WeatherWidget";
import DailyHabitsWidget from "../../widgets/DailyHabitsWidget/DailyHabitsWidget";
import NextTaskWidget from "../../widgets/NextTaskWidget/NextTaskWidget";
import "./StatusOverview.scss";

export default function StatusOverview({ weather, routine, nextTask }) {
    return (
        <section className="status-overview">
            <WeatherWidget weather={weather} />
            <DailyHabitsWidget routine={routine} />
            <NextTaskWidget nextTask={nextTask} />
        </section>
    );
}

import WeatherWidget from "../../widgets/WeatherWidget/WeatherWidget";
import DailyHabitsWidget from "../../widgets/DailyHabitsWidget/DailyHabitsWidget";
import NextTaskWidget from "../../widgets/NextTaskWidget/NextTaskWidget";
import "./StatusOverview.scss";

export default function StatusOverview({ weather, routine, nextTask }) {
  return (
    <section className="status-overview grid grid-cols-2 grid-rows-[7fr_3fr] gap-2">
      <WeatherWidget weather={weather} />
      <DailyHabitsWidget routine={routine} />
      <NextTaskWidget nextTask={nextTask} />
    </section>
  );
}

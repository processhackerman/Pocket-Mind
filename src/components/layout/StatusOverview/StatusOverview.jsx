import WeatherWidget from "../../widgets/WeatherWidget/WeatherWidget";
import DailyHabitsWidget from "../../widgets/DailyHabitsWidget/DailyHabitsWidget";
import NextTaskWidget from "../../widgets/NextTaskWidget/NextTaskWidget";
import InsightLarge from "../../widgets/InsightLarge/InsightLarge";
import "./StatusOverview.scss";

export default function StatusOverview({
  weather,
  routine,
  nextTask,
  insight,
}) {
  return (
    <>
      <section className="status-overview grid grid-cols-2 grid-rows-[7fr_3fr] gap-2 md:hidden">
        <WeatherWidget weather={weather} />
        <DailyHabitsWidget routine={routine} />
        <NextTaskWidget nextTask={nextTask} />
      </section>
      <section className="hidden md:grid status-overview grid-cols-[3fr_7fr] grid-rows-1 gap-3 items-stretch">
        <WeatherWidget weather={weather} />
        <InsightLarge insight={insight} />
      </section>
    </>
  );
}

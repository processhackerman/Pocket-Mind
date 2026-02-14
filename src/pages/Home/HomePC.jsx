import Stats from "../../components/layout/Stats/Stats";
import DailyHabitsWidget from "../../components/widgets/DailyHabitsWidget/DailyHabitsWidget";
import DailyQuote from "../../components/widgets/DailyQuote/DailyQuote";
import InsightLarge from "../../components/widgets/InsightLarge/InsightLarge";
import NextTaskWidget from "../../components/widgets/NextTaskWidget/NextTaskWidget";
import Overview from "../../components/widgets/Overview/Overview";
import StreakWidget from "../../components/widgets/StreakWidget/StreakWidget";
import TasksLarge from "../../components/widgets/TasksLarge/TasksLarge";
import WeatherWidget from "../../components/widgets/WeatherWidget/WeatherWidget";
import "./HomePage.scss";

export default function HomePC({
  weather,
  routine,
  nextTask,
  tasks,
  chartData,
  overviewData,
  insight,
  streak,
}) {
  return (
    <div className="flex flex-col gap-6 pt-10">
      <Stats />
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-6">
        <WeatherWidget weather={weather} />
        <InsightLarge insight={insight} />
        <div className="grid grid-cols-1 grid-rows-[4fr_2fr] gap-6">
          <DailyHabitsWidget routine={routine} />
          <NextTaskWidget nextTask={nextTask} />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-[1fr_auto] gap-6">
        <div className="row-span-2">
          <Overview overviewData={overviewData} chartData={chartData} />
        </div>
        <TasksLarge tasks={tasks} />
        <div className="grid grid-cols-2 gap-6">
          <DailyQuote quote="One step at a time" />
          <StreakWidget streak={streak} />
        </div>
      </div>
    </div>
  );
}

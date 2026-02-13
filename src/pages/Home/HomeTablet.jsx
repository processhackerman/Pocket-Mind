import "./HomePage.scss";
import WeatherWidget from "../../components/widgets/WeatherWidget/WeatherWidget";
import InsightLarge from "../../components/widgets/InsightLarge/InsightLarge";
import Stats from "../../components/layout/Stats/Stats";
import DailyHabitsWidget from "../../components/widgets/DailyHabitsWidget/DailyHabitsWidget";
import TasksLarge from "../../components/widgets/TasksLarge/TasksLarge";
import Overview from "../../components/widgets/Overview/Overview";
import NotesWidget from "../../components/widgets/NotesWidget/NotesWidget";
import NextTaskWidget from "../../components/widgets/NextTaskWidget/NextTaskWidget";
import DailyQuote from "../../components/widgets/DailyQuote/DailyQuote";

export default function HomeTablet({
  weather,
  routine,
  nextTask,
  tasks,
  notes,
  chartData,
  overviewData,
  insight,
}) {
  return (
    <div className="flex flex-col gap-3 ml-16">
      <section className="grid mt-3 status-overview grid-cols-[3fr_7fr] grid-rows-1 gap-3 items-stretch">
        <WeatherWidget weather={weather} />
        <InsightLarge insight={insight} />
      </section>
      <Stats />
      <section className="grid grid-cols-2 gap-3">
        <DailyHabitsWidget routine={routine} />
        <TasksLarge tasks={tasks} />
      </section>
      <Overview chartData={chartData} overviewData={overviewData} />
      <section className="grid grid-cols-2 grid-rows-2 gap-3">
        <div className="row-span-2">
          <NotesWidget notes={notes} />
        </div>
        <NextTaskWidget nextTask={nextTask} />
        <DailyQuote quote="One step at a time" />
      </section>
    </div>
  );
}

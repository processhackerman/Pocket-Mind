import "./HomePage.scss";
import UserWelcome from "../../components/ui/UserWelcome";
import WeatherWidget from "../../components/widgets/WeatherWidget/WeatherWidget";
import DailyHabitsWidget from "../../components/widgets/DailyHabitsWidget/DailyHabitsWidget";
import NextTaskWidget from "../../components/widgets/NextTaskWidget/NextTaskWidget";
import Insight from "../../components/widgets/Insight/Insight";
import NotesWidget from "../../components/widgets/NotesWidget/NotesWidget";
import TasksWidget from "../../components/widgets/TasksWidget/TasksWidget";
import DailyOverview from "../../components/layout/DailyOverview/DailyOverview";
import DailyQuote from "../../components/widgets/DailyQuote/DailyQuote";

export default function HomeMobile({
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
    <div className="grid gap-2 pb-[25vw]">
      <UserWelcome />
      <section className="status-overview grid grid-cols-2 grid-rows-[7fr_3fr] gap-2 md:hidden">
        <WeatherWidget weather={weather} />
        <DailyHabitsWidget routine={routine} />
        <NextTaskWidget nextTask={nextTask} />
      </section>
      <Insight insight={insight} />
      <section className="management-section grid grid-cols-2 max-w-full items-stretch gap-2 relative z-0 md:hidden">
        <NotesWidget notes={notes} />
        <TasksWidget tasks={tasks} />
      </section>
      <DailyOverview chartData={chartData} overviewData={overviewData} />
      <DailyQuote quote="One step at a time." />
    </div>
  );
}

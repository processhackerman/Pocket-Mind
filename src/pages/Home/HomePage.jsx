import Header from "../../components/layout/Header";
import UserWelcome from "../../components/ui/UserWelcome";
import StatusOverview from "../../components/layout/StatusOverview/StatusOverview";
import "./HomePage.scss";
import Insight from "../../components/widgets/Insight/Insight";
import ManagementSection from "../../components/layout/ManagementSection/ManagementSection";
import DailyOverview from "../../components/layout/DailyOverview/DailyOverview";
import DailyQuote from "../../components/widgets/DailyQuote/DailyQuote";
import Stats from "../../components/layout/Stats/Stats";
import WeatherWidget from "../../components/widgets/WeatherWidget/WeatherWidget";
import DailyHabitsWidget from "../../components/widgets/DailyHabitsWidget/DailyHabitsWidget";
import NextTaskWidget from "../../components/widgets/NextTaskWidget/NextTaskWidget";
import InsightLarge from "../../components/widgets/InsightLarge/InsightLarge";
import NotesWidget from "../../components/widgets/NotesWidget/NotesWidget";
import TasksWidget from "../../components/widgets/TasksWidget/TasksWidget";
import TasksLarge from "../../components/widgets/TasksLarge/TasksLarge";
import Overview from "../../components/widgets/Overview/Overview";

export default function HomePage() {
  const weather = {
    location: "London, UK",
    currentTemp: -10,
    condition: "Cloudy",
    quote: "It’s really cold today...",
    wind: 15,
    humidity: 32,
    drizzle: 87,

    forecast: [
      { time: "6:00", temp: -12, icon: "sunrise" },
      { time: "12:00", temp: -5, icon: "sunny" },
      { time: "18:00", temp: -9, icon: "sunset" },
      { time: "00:00", temp: -14, icon: "moon" },
    ],
  };

  const routine = [
    {
      text: "Morning workout",
      checked: false,
    },
    {
      text: "Read 30 minutes",
      checked: false,
    },
    {
      text: "Drink water",
      checked: true,
    },
    {
      text: "Take shower",
      checked: true,
    },
    {
      text: "Brush teeth",
      checked: true,
    },
  ];

  const nextTask = {
    text: "Math homework",
    time: "45min",
  };

  const insight = {
    mainText:
      "Temperatures will drop to -18°C tonight. It’s a good idea to bring scarf and gloves.",
    advice: [
      "You have school deadline in 1h 12min",
      "Start homework now · 52 min needed",
    ],
  };

  const notes = {
    lastText: "Buy notebook and charger",
    lastEditTime: "2h",
    tasks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  };

  const tasks = [
    {
      title: "Finish math homework",
      priority: "High",
      approxTime: "15 min",
      isCompleted: false,
    },
    {
      title: "Learn 10 new phrases",
      priority: "High",
      approxTime: "15 min",
      isCompleted: false,
    },
    {
      title: "Create a new project",
      priority: "High",
      approxTime: "15 min",
      isCompleted: false,
    },
    {
      title: "Choose color theme",
      priority: "High",
      approxTime: "15 min",
      isCompleted: false,
    },
  ];

  const chartData = [
    { day: "0d", score: 0 },
    { day: "1d", score: 45 },
    { day: "2d", score: 25 },
    { day: "3d", score: 75 },
    { day: "4d", score: 85 },
  ];

  return (
    <>
      <div className="home-page block">
        <div className="md:hidden block">
          <Header />
          <main className="home-page__inner grid gap-2 mx-auto md:hidden">
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
            <DailyOverview chartData={chartData} />
            <DailyQuote quote="One step at a time." />
          </main>
        </div>
        <div className="hidden md:block lg:hidden">
          <Header />
          <main className="home-page__inner flex flex-col gap-3 mx-auto md:flex lg:hidden ml-16">
            <section className="grid mt-3 status-overview grid-cols-[3fr_7fr] grid-rows-1 gap-3 items-stretch">
              <WeatherWidget weather={weather} />
              <InsightLarge insight={insight} />
            </section>
            <Stats />
            <section className="grid grid-cols-2 gap-3">
              <DailyHabitsWidget routine={routine} />
              <TasksLarge tasks={tasks} />
            </section>
            <Overview chartData={chartData} />
            <section className="grid grid-cols-2 grid-rows-2 gap-3">
              <div className="row-span-2">
                <NotesWidget notes={notes} />
              </div>
              <NextTaskWidget nextTask={nextTask} />
              <DailyQuote quote="One step at a time" />
            </section>
          </main>
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </>
  );
}

import Header from "../../components/layout/Header";
import "./HomePage.scss";
import DailyQuote from "../../components/widgets/DailyQuote/DailyQuote";
import Stats from "../../components/layout/Stats/Stats";
import WeatherWidget from "../../components/widgets/WeatherWidget/WeatherWidget";
import DailyHabitsWidget from "../../components/widgets/DailyHabitsWidget/DailyHabitsWidget";
import NextTaskWidget from "../../components/widgets/NextTaskWidget/NextTaskWidget";
import InsightLarge from "../../components/widgets/InsightLarge/InsightLarge";
import NotesWidget from "../../components/widgets/NotesWidget/NotesWidget";
import TasksLarge from "../../components/widgets/TasksLarge/TasksLarge";
import Overview from "../../components/widgets/Overview/Overview";
import HomeMobile from "./HomeMobile";
import useBreakpoint from "../../hooks/useBreakpoint";
import HomeTablet from "./HomeTablet";
import HomePC from "./HomePC";

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

  const overviewData = {
    resultPercentage: "80%",
    sleepDots: [true, true, true, true, true, true, false, false],
    waterSegments: [true, true, true, true, true, true, false, false],
    stepsSegments: [true, true, true, true, true, true, true, false, false],
    completedTasksPercentage: "70%",
    sleepTime: "6h 42m",
    waterProgress: "6 / 8",
    stepsCounter: "8,237",
  };

  const streak = [
    { day: "Sun", active: true },
    { day: "Mon", active: true },
    { day: "Tue", active: true },
    { day: "Wed", active: false },
    { day: "Thu", active: false },
    { day: "Fri", active: false },
    { day: "Sat", active: false },
  ];

  const { current } = useBreakpoint();

  return (
    <>
      <div className="home-page block">
        <Header />
        <main className="home-page__inner mx-auto">
          {current === "sm" && (
            <HomeMobile
              weather={weather}
              routine={routine}
              nextTask={nextTask}
              insight={insight}
              notes={notes}
              tasks={tasks}
              chartData={chartData}
              overviewData={overviewData}
            />
          )}
          {current === "md" && (
            <HomeTablet
              weather={weather}
              routine={routine}
              nextTask={nextTask}
              insight={insight}
              notes={notes}
              tasks={tasks}
              chartData={chartData}
              overviewData={overviewData}
            />
          )}
          {(current === "lg" || current === "xl") && (
            <HomePC
              weather={weather}
              routine={routine}
              nextTask={nextTask}
              insight={insight}
              notes={notes}
              tasks={tasks}
              chartData={chartData}
              overviewData={overviewData}
              streak={streak}
            />
          )}
        </main>
      </div>
    </>
  );
}

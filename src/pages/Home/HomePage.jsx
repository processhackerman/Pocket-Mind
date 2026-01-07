import Header from "../../components/layout/Header";
import UserWelcome from "../../components/ui/UserWelcome";
import StatusOverview from "../../components/layout/StatusOverview/StatusOverview";
import NextTaskWidget from "../../components/widgets/NextTaskWidget/NextTaskWidget";
import "./HomePage.scss";
import Insight from "../../components/widgets/Insight/Insight";
import ManagementSection from "../../components/layout/ManagementSection/ManagementSection";
import DailyOverview from "../../components/layout/DailyOverview/DailyOverview";

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
        advices: [
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
        "Finish math homework",
        "Clean desk",
        "Learn 10 new phrases",
        "Create a new project",
        "Choose color theme",
    ];

    return (
        <>
            <div className="home-page">
                <Header />
                <main className="home-page__inner">
                    <UserWelcome />
                    <StatusOverview
                        weather={weather}
                        routine={routine}
                        nextTask={nextTask}
                    />
                    <Insight insight={insight} />
                    <ManagementSection notes={notes} tasks={tasks} />
                    <DailyOverview />
                </main>
            </div>
        </>
    );
}

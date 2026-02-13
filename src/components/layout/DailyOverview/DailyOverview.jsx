import AddGlass from "../../ui/Overview/AddGlass";
import Streak from "../../ui/Overview/Streak";
import Overview from "../../widgets/Overview/Overview";
import "./DailyOverview.scss";

export default function DailyOverview({ chartData, overviewData }) {
  return (
    <section className="daily-overview grid grid-rows-2 grid-cols-[auto_1fr] md:grid-cols-1 md:grid-rows-1 items-stretch gap-2 relative z-0">
      <AddGlass />
      <Streak />

      <Overview chartData={chartData} overviewData={overviewData} />
    </section>
  );
}

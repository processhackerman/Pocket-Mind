import "./DailyOverview.scss";
import Overview from "../../widgets/Overview/Overview";
import AddGlass from "../../ui/Overview/AddGlass";
import Streak from "../../ui/Overview/Streak";

export default function DailyOverview() {
  return (
    <section className="daily-overview grid grid-rows-2 grid-cols-[auto_1fr] items-stretch gap-l relative z-0">
      <AddGlass />
      <Streak />
      <Overview />
    </section>
  );
}

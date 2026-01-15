import "./DailyOverview.scss";
import Overview from "../../widgets/Overview/Overview";
import AddGlass from "../../ui/Overview/AddGlass";
import Streak from "../../ui/Overview/Streak";

export default function DailyOverview() {
  return (
    <section className="daily-overview grid grid-rows-2 grid-cols-[25fr_75fr] gap-l mt-l relative z-0">
      <AddGlass />
      <Streak />
      <Overview />
    </section>
  );
}

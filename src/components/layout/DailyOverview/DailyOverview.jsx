import "./DailyOverview.scss";
import Overview from "../../widgets/Overview/Overview";
import AddGlass from "../../ui/Overview/AddGlass";
import Streak from "../../ui/Overview/Streak";

export default function DailyOverview() {
    return (
        <section className="daily-overview">
            <AddGlass />
            <Streak />
            <Overview />
        </section>
    );
}

import WidgetHeader from "../../ui/WidgetHeader";
import "./Overview.scss";
import { TrendingUp } from "lucide-react";
import MobileOverview from "./MobileOverview";
import TabletOverview from "./TabletOverview";
import PCOverview from "./PCOverview";

export default function Overview({ chartData, overviewData }) {
  return (
    <div className="overview p-xl flex flex-col justify-between h-full rounded-widget">
      <WidgetHeader
        icon={<TrendingUp className="w-full h-full" />}
        title="Daily overview"
        label="Sunday, December 14"
      />

      <div className="md:hidden">
        <MobileOverview overviewData={overviewData} />
      </div>

      <div className="hidden md:flex lg:hidden items-stretch gap-6 h-48 mt-4">
        <TabletOverview chartData={chartData} overviewData={overviewData} />
      </div>

      <div className="hidden lg:block">
        <PCOverview chartData={chartData} overviewData={overviewData} />
      </div>
    </div>
  );
}

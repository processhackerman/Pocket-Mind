import WidgetHeader from "../../ui/WidgetHeader";
import "./Overview.scss";
import { TrendingUp } from "lucide-react";
import MobileOverview from "./MobileOverview";
import TabletOverview from "./TabletOverview";
import PCOverview from "./PCOverview";
import useBreakpoint from "../../../hooks/useBreakpoint";

export default function Overview({ chartData, overviewData }) {
  const { current } = useBreakpoint();

  return (
    <div className="overview p-xl flex flex-col justify-between h-full rounded-widget widget-shadow">
      <WidgetHeader
        icon={<TrendingUp className="w-full h-full" />}
        title="Daily overview"
        label="Sunday, December 14"
      />

      {current === "sm" && <MobileOverview overviewData={overviewData} />}
      {current === "md" && (
        <TabletOverview chartData={chartData} overviewData={overviewData} />
      )}
      {(current === "lg" || current === "xl") && (
        <PCOverview chartData={chartData} overviewData={overviewData} />
      )}
    </div>
  );
}

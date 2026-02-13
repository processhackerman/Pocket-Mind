import { Target } from "lucide-react";
import WidgetHeader from "../../ui/WidgetHeader";
import "./StreakWidget.scss";
import streak_icon from "../../../assets/icons/streak.png";
import streak_gray_icon from "../../../assets/icons/streak_gray.svg";

export default function StreakWidget({ streak }) {
  return (
    <div className="streak-widget w-full p-xl pb-l flex flex-col gap-6 rounded-widget">
      <WidgetHeader
        icon={<Target className="w-full h-full" />}
        title="Streak"
        label="Daily Streak"
      />
      <div className="grid grid-cols-7 justify-between">
        {streak.map((item, index) => (
          <div className="flex flex-col items-center gap-3" key={index}>
            <div className="streak-widget__label font-bold">{item.day}</div>
            <div className="streak-widget__fire relative h-auto">
              <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-2/3 font-bold">
                {index}
              </div>
              {item.active ? (
                <img src={streak_icon} className="w-full h-full" alt="" />
              ) : (
                <img src={streak_gray_icon} className="w-full h-full" alt="" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

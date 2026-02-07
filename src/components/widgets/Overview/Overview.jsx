import "./Overview.scss";
import trending_up from "../../../assets/icons/trending-up.png";
import moon_icon from "../../../assets/icons/moon.svg";
import droplet_icon from "../../../assets/icons/droplet.svg";
import step_icon from "../../../assets/icons/footstep.png";
import check_icon from "../../../assets/icons/check_routine.svg";
import WidgetHeader from "../../ui/WidgetHeader";

export default function Overview() {
  const sleepDots = [true, true, true, true, true, true, false, false];
  const waterSegments = [true, true, true, true, true, true, false, false];
  const stepsSegments = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
  ];
  const completedTasksPercentage = "70%";
  const resultPercentage = "70%";

  const sleepTime = "6h 42m";
  const waterProgress = "6 / 8";
  const stepsCounter = "8,237";

  return (
    <div className="overview p-xl flex flex-col justify-between">
      <WidgetHeader
        icon={trending_up}
        title="Daily overview"
        label="Sunday, December 14"
      />

      <div className="flex justify-between items-stretch my-l gap-3 flex-1">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 flex-1">
          <div className="flex flex-col items-stretch justify-start gap-1">
            <div className="flex items-center justify-start gap-1">
              <div className="w-4 h-4">
                <img src={moon_icon} alt="" className="w-full h-full" />
              </div>
              <div className="item-title font-semibold">{sleepTime}</div>
            </div>
            <div className="flex gap-0.5">
              {sleepDots.map((item, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    item ? "bg-white" : "border-2 border-white"
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start gap-1">
            <div className="flex items-center justify-start gap-1">
              <div className="w-4 h-4">
                <img src={droplet_icon} alt="" className="w-full h-full" />
              </div>
              <div className="item-title font-semibold">{waterProgress}</div>
            </div>
            <div className="flex gap-[1px] rounded-full overflow-hidden">
              {waterSegments.map((item, index) => (
                <div
                  key={index}
                  className={`flex-1 h-2 ${
                    item ? "bg-accent-primary" : "bg-gray-800"
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start gap-1">
            <div className="flex items-center justify-start gap-1">
              <div className="w-4 h-4">
                <img src={step_icon} alt="" className="w-full h-full" />
              </div>
              <div className="item-title font-semibold">{stepsCounter}</div>
            </div>
            <div className="flex gap-[1px] rounded-full overflow-hidden">
              {waterSegments.map((item, index) => (
                <div
                  key={index}
                  className={`flex-1 h-2 ${
                    item ? "bg-accent-primary" : "bg-gray-800"
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-start gap-1">
            <div className="flex items-center justify-start gap-1">
              <div className="w-4 h-4">
                <img src={check_icon} alt="" className="w-full h-full" />
              </div>
              <div className="item-title font-semibold">
                {completedTasksPercentage}
              </div>
            </div>
            <div className="rounded-full overflow-hidden bg-gray-800 h-2">
              <div
                className="progress-bar rounded-full h-full"
                style={{ width: completedTasksPercentage }}
              ></div>
            </div>
          </div>
        </div>
        <div className="battery flex flex-col justify-end border-white border-2 rounded-xl bg-black overflow-hidden min-w-[20%] w-[20%]">
          <div
            className="battery-progress relative w-full"
            style={{ height: resultPercentage }}
          >
            <div className="battery-percentage absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-black text-xs font-bold">
              {resultPercentage}
            </div>
          </div>
        </div>
      </div>
      <div className="review w-full py-[3%] flex items-center justify-center rounded-xl">
        It's amazing result!
      </div>
    </div>
  );
}

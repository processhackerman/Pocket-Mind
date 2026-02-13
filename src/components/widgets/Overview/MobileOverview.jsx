import "./Overview.scss";
import WidgetHeader from "../../ui/WidgetHeader";
import { TrendingUp, Moon, Droplet, Footprints, Check } from "lucide-react";

export default function MobileOverview({ overviewData }) {
  return (
    <>
      <div className="flex justify-between items-stretch my-l gap-3 flex-1">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 flex-1">
          <div className="flex flex-col items-stretch justify-start gap-1">
            <div className="flex items-center justify-start gap-1">
              <div className="w-4 h-4">
                <Moon className="w-full h-full" />
              </div>

              <div className="item-title font-semibold">
                {overviewData.sleepTime}
              </div>
            </div>

            <div className="flex gap-0.5">
              {overviewData.sleepDots.map((item, index) => (
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
                <Droplet className="w-full h-full" />
              </div>

              <div className="item-title font-semibold">
                {overviewData.waterProgress}
              </div>
            </div>

            <div className="flex gap-[1px] rounded-full overflow-hidden">
              {overviewData.waterSegments.map((item, index) => (
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
                <Footprints className="w-full h-full" />
              </div>

              <div className="item-title font-semibold">
                {overviewData.stepsCounter}
              </div>
            </div>

            <div className="flex gap-[1px] rounded-full overflow-hidden">
              {overviewData.waterSegments.map((item, index) => (
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
                <Check className="w-full h-full" />
              </div>

              <div className="item-title font-semibold">
                {overviewData.completedTasksPercentage}
              </div>
            </div>

            <div className="rounded-full overflow-hidden bg-gray-800 h-2">
              <div
                className="progress-bar rounded-full h-full"
                style={{ width: overviewData.completedTasksPercentage }}
              ></div>
            </div>
          </div>
        </div>

        <div className="battery flex flex-col justify-end border-white border-2 rounded-xl bg-black overflow-hidden min-w-[20%] w-[20%]">
          <div
            className="battery-progress relative w-full"
            style={{ height: overviewData.resultPercentage }}
          >
            <div className="battery-percentage absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-black text-xs font-bold">
              {overviewData.resultPercentage}
            </div>
          </div>
        </div>
      </div>
      <div className="review w-full py-[3%] flex items-center justify-center rounded-xl">
        It's an amazing result!
      </div>
    </>
  );
}

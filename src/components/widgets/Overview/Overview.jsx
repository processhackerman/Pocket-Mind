import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import WidgetHeader from "../../ui/WidgetHeader";
import "./Overview.scss";
import { Check, Droplet, Footprints, Moon, TrendingUp } from "lucide-react";

export default function Overview({ chartData }) {
  const resultPercentage = "80%";

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
  const sleepTime = "6h 42m";
  const waterProgress = "6 / 8";
  const stepsCounter = "8,237";

  return (
    <div className="overview p-xl flex flex-col justify-between h-full rounded-widget">
      <WidgetHeader
        icon={<TrendingUp className="w-full h-full" />}
        title="Daily overview"
        label="Sunday, December 14"
      />

      <div className="md:hidden flex justify-between items-stretch my-l gap-3 flex-1">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 flex-1">
          <div className="flex flex-col items-stretch justify-start gap-1">
            <div className="flex items-center justify-start gap-1">
              <div className="w-4 h-4">
                <Moon className="w-full h-full" />
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
                <Droplet className="w-full h-full" />
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
                <Footprints className="w-full h-full" />
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
                <Check className="w-full h-full" />
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

      <div className="hidden md:flex items-stretch gap-6 h-48 mt-4">
        <div className="overview__message-box text-center flex flex-1 items-center justify-center border-2 rounded-3xl p-2 max-w-[20%] h-[80%]">
          <p className="font-bold text-white text-sm leading-tight">
            It's an amazing result! Keep going.
          </p>
        </div>

        <div className="battery relative w-16 h-[80%] border-2 border-white rounded-2xl bg-black overflow-hidden flex-shrink-0">
          <div
            className="battery-progress absolute bottom-0 w-full bg-gradient-to-t from-accent-primary to-cyan-400"
            style={{ height: resultPercentage }}
          />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black z-10">
            {resultPercentage}
          </span>
        </div>

        <div className="flex-[2] h-48 min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00f5d4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00f5d4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#ffffff10"
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#5d6b75", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#5d6b75", fontSize: 12 }}
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111a1f",
                  border: "1px solid #00f5d4",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "#00f5d4" }}
              />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#00f5d4"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorScore)"
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="review w-full py-[3%] flex items-center justify-center rounded-xl">
        It's amazing result!
      </div>
    </div>
  );
}

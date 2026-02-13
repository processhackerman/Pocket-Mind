import "./Overview.scss";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

export default function TabletOverview({ chartData, overviewData }) {
  return (
    <>
      <div className="overview__message-box text-center flex flex-1 items-center justify-center border-2 rounded-3xl p-2 max-w-[20%] h-[90%]">
        <p className="font-bold text-white text-sm leading-tight">
          It's an amazing result! Keep going.
        </p>
      </div>

      <div className="battery relative w-16 h-[90%] border-2 border-white rounded-2xl bg-black overflow-hidden flex-shrink-0">
        <div
          className="battery-progress absolute bottom-0 w-full bg-gradient-to-t from-accent-primary to-cyan-400"
          style={{ height: overviewData.resultPercentage }}
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black z-10">
          {overviewData.resultPercentage}
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
    </>
  );
}

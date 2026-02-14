import "./DailyHabitsWidget.scss";
import { Check, Zap } from "lucide-react";
import WidgetHeader from "../../ui/WidgetHeader";

export default function DailyHabitsWidget({ routine }) {
  const completedCount = routine.filter((item) => item.checked).length;
  const totalCount = routine.length;
  const percentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const completed_tasks = routine.filter((item) => item.checked);
  const incompleted_tasks = routine.filter((item) => !item.checked);

  const orderedProgressItems = [...completed_tasks, ...incompleted_tasks];

  return (
    <div className="routine rounded-widget flex flex-col justify-between aspect-square md:aspect-auto widget-shadow">
      <WidgetHeader
        icon={<Zap className="w-full h-full" />}
        title="Daily Habits"
        label="Discipline"
      />

      {/* Task List */}
      <div className="routine__tasks flex flex-col max-h-[40%] overflow-y-auto gap-1 scrollbar-hide">
        {routine.map((item, index) => (
          <div className="flex items-center gap-1" key={index}>
            <div
              className={`routine__check rounded-full relative ${item.checked ? "routine__check--checked opacity-60" : ""}`}
            >
              {item.checked && (
                <Check className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              )}
            </div>
            <div
              className={`routine__text ${item.checked ? "routine__text--checked opacity-60" : ""}`}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>

      {/* PROGRESS BAR SECTION */}
      <div className="w-full">
        <div className="routine__progress flex items-center gap-2 w-full md:hidden">
          {orderedProgressItems.map((item, index) => (
            <div
              key={index}
              className={`routine__square flex-1 ${item.checked ? "routine__square--checked" : "bg-gray-800"}`}
            ></div>
          ))}
        </div>

        <div className="progress-bar hidden md:flex w-full bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-accent-primary shadow-[0_0_10px_rgba(0,245,212,0.4)] transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="routine__info text-center opacity-60">
        {`${completedCount} of ${totalCount} completed · ${percentage}%`}
      </div>
    </div>
  );
}

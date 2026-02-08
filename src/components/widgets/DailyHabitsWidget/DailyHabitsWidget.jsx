import "./DailyHabitsWidget.scss";
import lightning_bolt from "../../../assets/icons/lightning-bolt.png";
import checkIcon from "../../../assets/icons/check_routine.svg";
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
    <div className="routine flex flex-col justify-between aspect-square gap-3">
      <WidgetHeader
        icon={lightning_bolt}
        title="Daily Habits"
        label="Discipline"
      />

      <div className="routine__tasks flex flex-col max-h-[40%] overflow-y-auto gap-[0.2rem] scrollbar-hide">
        {routine.map((item, index) => (
          <div className="flex items-center gap-1" key={index}>
            <div
              className={`routine__check rounded-full relative  ${
                item.checked ? "routine__check--checked opacity-60" : ""
              }`}
            >
              {item.checked && (
                <img
                  src={checkIcon}
                  className="w-[80%] absolute -bottom-[0.5px]"
                />
              )}
            </div>
            <div
              className={`routine__text ${
                item.checked ? "routine__text--checked opacity-60" : ""
              }`}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>

      <div className="routine__progress flex items-center gap-2 w-full">
        {orderedProgressItems.map((item, index) => (
          <div
            className={`routine__square flex-1 h-5 bg-gray-800 m-0 rounded-md ${
              item.checked ? "routine__square--checked" : ""
            }`}
            key={index}
          ></div>
        ))}
      </div>

      <div className="routine__info text-center opacity-60">{`${completedCount} of ${totalCount} completed · ${percentage}%`}</div>
    </div>
  );
}

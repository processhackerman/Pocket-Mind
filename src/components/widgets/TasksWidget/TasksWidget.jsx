import "./TasksWidget.scss";
import WidgetHeader from "../../ui/WidgetHeader";
import { ClipboardList } from "lucide-react";

export default function TasksWidget({ tasks }) {
  return (
    <div className="tasks-widget p-xl pb-l flex flex-col justify-between rounded-widget widget-shadow">
      <WidgetHeader
        icon={<ClipboardList className="w-full h-full" />}
        label="Today’s plan:"
        title="Tasks"
      />

      <div className="tasks-widget__body">
        <ul className="tasks-widget__list p-0 list-none">
          {tasks?.map((item, index) => (
            <li
              className="tasks-widget__item indent-[3vw] leading-normal relative"
              key={index}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="tasks-widget__tip text-[0.4rem] opacity-40 text-center">
        Swipe left to see more
      </div>
    </div>
  );
}

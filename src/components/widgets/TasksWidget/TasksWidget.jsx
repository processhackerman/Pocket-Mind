import "./TasksWidget.scss";
import tasks_icon from "../../../assets/icons/tasks.png";
import WidgetHeader from "../../ui/WidgetHeader";

export default function TasksWidget({ tasks }) {
  return (
    <div className="tasks-widget p-xl pb-l flex flex-col justify-between">
      <WidgetHeader icon={tasks_icon} label="Today’s plan:" title="Tasks" />

      <div className="tasks-widget__body">
        <ul className="tasks-widget__list p-0 list-none">
          {tasks?.map((item, index) => (
            <li
              className="tasks-widget__item indent-[3vw] leading-normal relative"
              key={index}
            >
              {item}
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

import "./TasksWidget.scss";
import tasks_icon from "../../../assets/icons/tasks.png";

export default function TasksWidget({ tasks }) {
  return (
    <div className="tasks-widget p-xl pb-l flex flex-col justify-between">
      <div className="tasks-widget__header grid grid-cols-[auto_auto] grid-rows-[auto_auto] justify-between items-center">
        <div className="tasks-widget__title title">Tasks</div>
        <div className="tasks-widget__label label">Today’s plan:</div>
        <div className="tasks-widget__icon w-7 h-7">
          <img src={tasks_icon} alt="" />
        </div>
      </div>

      <div className="tasks-widget__body">
        <ul className="tasks-widget__list p-0 list-none">
          {tasks?.map((item, index) => (
            <li
              className="tasks-widget__item text-[clamp(0.6rem,0.5077rem+0.4103vw,1rem)] indent-[3vw] leading-normal relative"
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

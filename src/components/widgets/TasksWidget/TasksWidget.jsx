import "./TasksWidget.scss";
import tasks_icon from "../../../assets/icons/tasks.png";

export default function TasksWidget({ tasks }) {
    return (
        <div className="tasks-widget">
            <div className="tasks-widget__header">
                <div className="tasks-widget__title title">Tasks</div>
                <div className="tasks-widget__label label">Today’s plan:</div>
                <div className="tasks-widget__icon">
                    <img src={tasks_icon} alt="" />
                </div>
            </div>

            <div className="tasks-widget__body">
                <ul className="tasks-widget__list">
                    {tasks?.map((item, index) => (
                        <li className="tasks-widget__item" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="tasks-widget__tip">Swipe left to see more</div>
        </div>
    );
}

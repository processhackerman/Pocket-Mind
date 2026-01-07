import "./DailyHabitsWidget.scss";
import lightning_bolt from "../../../assets/icons/lightning-bolt.png";

export default function DailyHabitsWidget({ routine }) {
    const completedCount = routine.filter((item) => item.checked).length;
    const totalCount = routine.length;
    const percentage =
        totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    const completed_tasks = routine.filter((item) => item.checked);
    const incompleted_tasks = routine.filter((item) => !item.checked);

    const orderedProgressItems = [...completed_tasks, ...incompleted_tasks];

    return (
        <div className="routine">
            <div className="routine__header">
                <div className="routine__title title">Daily Habits</div>
                <div className="routine__icon">
                    <img src={lightning_bolt} alt="" />
                </div>
            </div>

            <div className="routine__tasks">
                {routine.map((item, index) => (
                    <div className="routine__item" key={index}>
                        <div
                            className={`routine__check ${
                                item.checked ? "routine__check--checked" : ""
                            }`}
                        ></div>
                        <div
                            className={`routine__text ${
                                item.checked ? "routine__text--checked" : ""
                            }`}
                        >
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>

            <div className="routine__progress">
                {orderedProgressItems.map((item, index) => (
                    <div
                        className={`routine__square ${
                            item.checked ? "routine__square--checked" : ""
                        }`}
                        key={index}
                    ></div>
                ))}
            </div>

            <div className="routine__info">{`${completedCount} of ${totalCount} completed · ${percentage}%`}</div>
        </div>
    );
}

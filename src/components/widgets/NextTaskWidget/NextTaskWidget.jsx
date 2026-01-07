import "./NextTaskWidget.scss";

export default function NextTaskWidget({ nextTask }) {
    return (
        <div className="next-task">
            <div className="next-task__divider"></div>
            <div className="next-task__body">
                <div className="next-task__header">Next Task</div>
                <div className="next-task__text">{nextTask?.text}</div>
                <div className="next-task__time">{nextTask?.time}</div>
            </div>
        </div>
    );
}

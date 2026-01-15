import "./NextTaskWidget.scss";

export default function NextTaskWidget({ nextTask }) {
  return (
    <div className="next-task text-xs flex items-center justify-start gap-3">
      <div className="next-task__divider h-3/4 rounded-2xl w-1"></div>
      <div className="next-task__body h-fit flex flex-col justify-between">
        <div className="next-task__header">Next Task</div>
        <div className="next-task__text font-semibold text-xs">
          {nextTask?.text}
        </div>
        <div className="next-task__time text-tiny opacity-40">
          {nextTask?.time}
        </div>
      </div>
    </div>
  );
}

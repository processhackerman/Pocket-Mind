import "./NextTaskWidget.scss";

export default function NextTaskWidget({ nextTask }) {
  return (
    <div className="next-task rounded-widget flex items-center justify-start gap-2 flex-1">
      <div className="next-task__divider h-3/4 rounded-2xl"></div>
      <div className="next-task__body h-fit flex flex-col justify-between md:h-[65%]">
        <div className="next-task__header">Next Task</div>
        <div className="next-task__text font-semibold">{nextTask?.text}</div>
        <div className="next-task__time opacity-40">{nextTask?.time}</div>
      </div>
    </div>
  );
}

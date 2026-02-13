import "./TasksLarge.scss";

import { ClipboardCheck, Check } from "lucide-react";

const TaskCard = ({ title, priority, approxTime, isCompleted }) => (
  <div className="tasks-widget__card">
    <div className="flex items-center gap-2 min-w-0 w-full">
      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />

      <h4
        className="task-title text-white font-medium truncate w-full"
        title={title}
      >
        {title}
      </h4>
    </div>

    <div className="tasks-widget__divider" />

    <div className="flex justify-between items-center mt-auto relative">
      <div className="flex flex-col gap-1">
        <p className="tasks-widget__subtitle">
          Priority: <span className="text-white font-bold">{priority}</span>
        </p>
        <p className="tasks-widget__subtitle truncate">
          Approx. time:{" "}
          <span className="text-white font-bold">{approxTime}</span>
        </p>
      </div>

      <button
        className={`
        w-4 h-4 absolute right-0 -top-1.5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all
        ${isCompleted ? "bg-accent-primary border-accent-primary" : "border-gray-600"}
      `}
      >
        {isCompleted && <Check size={16} className="text-black stroke-[3]" />}
      </button>
    </div>
  </div>
);

export default function TasksLarge({ tasks }) {
  return (
    <div className="tasks-widget">
      <div className="tasks-widget__header">
        <div>
          <h2 className="tasks-widget__title">Tasks</h2>
          <p className="tasks-widget__subtitle">Today's plan:</p>
        </div>
        <ClipboardCheck className="text-gray-400" size={24} />
      </div>

      <div className="tasks-widget__scroll-area">
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </div>
    </div>
  );
}

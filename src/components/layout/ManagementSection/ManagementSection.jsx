import "./ManagementSection.scss";
import NotesWidget from "../../widgets/NotesWidget/NotesWidget";
import TasksLarge from "../../widgets/TasksLarge/TasksLarge";
import TasksWidget from "../../widgets/TasksWidget/TasksWidget";
import DailyHabitsWidget from "../../widgets/DailyHabitsWidget/DailyHabitsWidget";

export default function ManagementSection({ notes, tasks, routine }) {
  return (
    <>
      <section className="management-section grid grid-cols-2 max-w-full items-stretch gap-2 relative z-0 md:hidden">
        <NotesWidget notes={notes} />
        <TasksWidget tasks={tasks} />
      </section>
      <section className="management-section hidden grid-cols-2 max-w-full items-stretch gap-2 relative z-0 md:grid">
        <DailyHabitsWidget routine={routine} />
        <TasksLarge tasks={tasks} />
      </section>
    </>
  );
}

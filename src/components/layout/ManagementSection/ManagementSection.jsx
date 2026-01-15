import "./ManagementSection.scss";
import NotesWidget from "../../widgets/NotesWidget/NotesWidget";
import TasksWidget from "../../widgets/TasksWidget/TasksWidget";

export default function ManagementSection({ notes, tasks }) {
  return (
    <section className="management-section grid grid-cols-2 max-w-full items-stretch gap-l relative z-0">
      <NotesWidget notes={notes} />
      <TasksWidget tasks={tasks} />
    </section>
  );
}

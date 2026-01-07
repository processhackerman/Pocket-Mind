import "./ManagementSection.scss";
import NotesWidget from "../../widgets/NotesWidget/NotesWidget";
import TasksWidget from "../../widgets/TasksWidget/TasksWidget";

export default function ManagementSection({ notes, tasks }) {
    return (
        <section className="management-section">
            <NotesWidget notes={notes} />
            <TasksWidget tasks={tasks} />
        </section>
    );
}

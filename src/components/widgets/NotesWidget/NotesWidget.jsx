import "./NotesWidget.scss";
import WidgetHeader from "../../ui/WidgetHeader";
import { Clock, Folder, NotebookIcon } from "lucide-react";

export default function NotesWidget({ notes }) {
  return (
    <div className="notes-widget p-xl pb-l flex flex-col justify-between md:flex-1 h-full rounded-widget widget-shadow">
      <WidgetHeader
        icon={<NotebookIcon className="w-full h-full" />}
        title="Notes"
        label="Last edited note"
      />

      <div className="notes-widget__body text-center p-m rounded-xl flex flex-1 items-center justify-center font-bold">
        {notes.lastText}
      </div>

      <div className="notes-widget__footer flex flex-col gap-l">
        <div className="notes-widget__info flex flex-col items-start gap-xs">
          <div className="notes-widget__item notes-widget__item--total">
            <div className="notes-widget__item-icon">
              <Folder />
            </div>
            <div className="notes-widget__item-text">{`${notes?.tasks?.length} notes total`}</div>
          </div>
          <div className="notes-widget__item notes-widget__item--updated">
            <div className="notes-widget__item-icon">
              <Clock />
            </div>
            <div className="notes-widget__item-text">{`Updated ${notes?.lastEditTime} ago`}</div>
          </div>
        </div>

        <div className="notes-widget__tip text-[0.45rem] text-center opacity-40"></div>
      </div>
    </div>
  );
}

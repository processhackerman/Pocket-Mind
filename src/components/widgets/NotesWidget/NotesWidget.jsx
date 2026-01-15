import "./NotesWidget.scss";
import notes_icon from "../../../assets/icons/notes.png";
import folder_icon from "../../../assets/icons/folder.svg";
import clocks_icon from "../../../assets/icons/clocks.png";

export default function NotesWidget({ notes }) {
  return (
    <div className="notes-widget p-xl pb-l flex flex-col justify-between">
      <div className="notes-widget__header grid grid-cols-[auto_auto] grid-rows-[auto_auto] justify-between items-center">
        <div className="notes-widget__title title">Notes</div>
        <div className="notes-widget__label label">Last edited note</div>
        <div className="notes-widget__icon w-7 h-7">
          <img src={notes_icon} alt="" />
        </div>
      </div>

      <div className="notes-widget__body text-center text-[clamp(0.65rem,0.5404rem+0.4872vw,1.125rem)] p-m rounded-xl">
        {notes.lastText ? notes.lastText : "Buy notebookand charger"}
      </div>

      <div className="notes-widget__footer flex flex-col gap-l">
        <div className="notes-widget__info flex flex-col items-start gap-xs">
          <div className="notes-widget__item notes-widget__item--total">
            <div className="notes-widget__item-icon">
              <img src={folder_icon} alt="" />
            </div>
            <div className="notes-widget__item-text">{`${notes?.tasks?.length} notes total`}</div>
          </div>
          <div className="notes-widget__item notes-widget__item--updated">
            <div className="notes-widget__item-icon">
              <img src={clocks_icon} alt="" />
            </div>
            <div className="notes-widget__item-text">{`Updated ${notes?.lastEditTime} ago`}</div>
          </div>
        </div>

        <div className="notes-widget__tip text-[0.45rem] text-center opacity-40">
          Swipe left to pin important notes
        </div>
      </div>
    </div>
  );
}

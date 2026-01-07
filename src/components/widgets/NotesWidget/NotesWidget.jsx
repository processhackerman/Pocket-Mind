import "./NotesWidget.scss";
import notes_icon from "../../../assets/icons/notes.png";
import folder_icon from "../../../assets/icons/folder.svg";
import clocks_icon from "../../../assets/icons/clocks.png";

export default function NotesWidget({ notes }) {
    return (
        <div className="notes-widget">
            <div className="notes-widget__header">
                <div className="notes-widget__title title">Notes</div>
                <div className="notes-widget__label label">
                    Last edited note
                </div>
                <div className="notes-widget__icon">
                    <img src={notes_icon} alt="" />
                </div>
            </div>

            <div className="notes-widget__body">
                {notes.lastText ? notes.lastText : "Buy notebookand charger"}
            </div>

            <div className="notes-widget__footer">
                <div className="notes-widget__info">
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

                <div className="notes-widget__tip">
                    Swipe left to pin important notes
                </div>
            </div>
        </div>
    );
}

import "./OverviewUIStyle.scss";
import droplet_icon from "../../../assets/icons/add-glass-droplet.svg";

export default function AddGlass() {
    return (
        <div className="add-glass-button">
            <div className="add-glass-button__icon">
                <div className="add-glass-button__image">
                    <img src={droplet_icon} alt="" />
                </div>
            </div>
            <div className="add-glass-button__text">Add glass</div>
        </div>
    );
}

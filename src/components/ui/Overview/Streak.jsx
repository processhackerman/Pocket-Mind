import "./OverviewUIStyle.scss";
import fire_icon from "../../../assets/icons/streak.png";

export default function Streak() {
    return (
        <div className="streak-widget">
            <div className="streak-widget__title">Habbits streak</div>
            <div className="streak-widget__main">
                <div className="streak-widget__icon">
                    <img src={fire_icon} alt="" />
                </div>
                <div className="streak-widget__text">3</div>
            </div>
        </div>
    );
}

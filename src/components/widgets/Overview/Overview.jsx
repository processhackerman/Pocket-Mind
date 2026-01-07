import "./Overview.scss";
import trending_up from "../../../assets/icons/trending-up.png";

export default function Overview() {
    return (
        <div className="overview">
            <div className="overview__header">
                <div className="overview-widget__title title">
                    Daily overview
                </div>
                <div className="overview-widget__label label">
                    Sunday, December 14
                </div>
                <div className="overview-widget__icon">
                    <img src={trending_up} alt="" />
                </div>
            </div>

            <div className="overview__info">
                <div className="overview__stats">
                    <div className="overview__item">
                        <div className="overview__item-icon"></div>
                        <div className="overview__item-title"></div>
                        <div className="overview__item-progress"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

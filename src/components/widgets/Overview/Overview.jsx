import "./Overview.scss";
import trending_up from "../../../assets/icons/trending-up.png";

export default function Overview() {
  return (
    <div className="overview p-xl">
      <div className="overview__header grid grid-cols-[auto_auto] grid-rows-[auto_auto] justify-between items-center">
        <div className="overview-widget__title title">Daily overview</div>
        <div className="overview-widget__label label">Sunday, December 14</div>
        <div className="overview-widget__icon w-7 h-7">
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

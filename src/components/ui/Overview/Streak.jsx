import fire_icon from "../../../assets/icons/streak.png";

export default function Streak() {
  return (
    <div className="widget-shadow streak-widget flex flex-col justify-between items-center p-m">
      <div className="streak-widget__title text-[0.45rem] font-semibold">
        Habits streak
      </div>
      <div className="streak-widget__main flex justify-center relative">
        <div className="streak-widget__icon w-[15vw]">
          <img src={fire_icon} className="w-full h-full" alt="" />
        </div>
        <div className="streak-widget__text absolute top-[70%] left-1/2 translate-x-[-50%] translate-y-[-60%] font-bold text-lg">
          3
        </div>
      </div>
    </div>
  );
}

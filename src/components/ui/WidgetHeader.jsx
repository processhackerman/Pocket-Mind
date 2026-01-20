export default function WidgetHeader({ icon, title, label }) {
  return (
    <div className="widget-header grid grid-cols-[auto_auto] grid-rows-[auto_auto] justify-between items-center">
      <div className="title">{title}</div>
      <div className="label">{label}</div>
      <div className="icon w-7 h-7">
        <img src={icon} alt="" />
      </div>
    </div>
  );
}

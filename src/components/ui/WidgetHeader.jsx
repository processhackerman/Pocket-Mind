export default function WidgetHeader({ icon, title, label }) {
  return (
    <div className="widget-header grid grid-cols-[auto_auto] grid-rows-[auto_auto] justify-between items-center">
      <div className="title">{title}</div>
      <div className="label">{label}</div>
      <div className="icon h-auto">{icon}</div>
    </div>
  );
}

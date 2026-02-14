import "./StatWidget.scss";

export default function StatWidget({
  icon,
  title,
  subtitle,
  valueDisplay,
  progress,
  type = "segmented",
  segments = 8,
}) {
  return (
    <div className="stat-card flex-1 widget-shadow">
      <div className="stat-card__header">
        <div className="stat-card__info">
          <div className="stat-card__icon">{icon}</div>
          <div>
            <h3 className="stat-card__title">{title}</h3>
            <p className="stat-card__subtitle">{subtitle}</p>
          </div>
        </div>

        <div className="stat-card__value">{valueDisplay}</div>
      </div>

      <div className="w-full flex items-center h-3">
        {type === "segmented" ? (
          <div className="flex w-full gap-1.5">
            {[...Array(segments)].map((_, i) => (
              <div
                key={i}
                className={`h-2.5 flex-1 rounded-full transition-all duration-700 ${
                  i < progress
                    ? "bg-[#00f5d4] shadow-[0_0_10px_rgba(0,245,212,0.4)]"
                    : "bg-[#1a2329]"
                }`}
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-2.5 bg-[#1a2329] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#00f5d4] shadow-[0_0_10px_rgba(0,245,212,0.4)] transition-all duration-700 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

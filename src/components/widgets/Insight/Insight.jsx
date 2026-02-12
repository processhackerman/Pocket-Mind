import Logo from "../../ui/Logo";
import formatText from "../../../lib/formatText.jsx";
import "./Insight.scss";
import {
  ArrowUp,
  ClipboardList,
  NotebookTabs,
  Thermometer,
} from "lucide-react";

export default function Insight({ insight }) {
  return (
    <section className="insight relative z-0 md:hidden">
      <div className="insight__inner relative py-2 px-4">
        <div className="insight__header flex justify-between items-center my-0.5">
          <div className="insight__logo">
            <Logo text="AI Insight" />
          </div>
          <div className="insight__icon w-[1.8rem] h-[1.8rem]">
            <ArrowUp className="w-full h-full" />
          </div>
        </div>

        <div className="insight__body p-l rounded-2xl">
          <div className="insight__main-text font-semibold leading-snug">
            {formatText(insight?.mainText)}
          </div>
          <div className="insight__advice mt-s flex flex-col gap-xs">
            {insight?.advice?.map((item, index) => (
              <div
                className="insight__advice flex items-center gap-s leading-tight"
                key={index}
              >
                <span className="insight__advice-icon">&rarr;</span>
                <span className="insight__advice-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="insight__footer flex justify-between items-center my-l px-l">
          <div className="insight__footer-item insight__footer-item--temperature">
            <div className="insight__footer-icon">
              <Thermometer className="w-full h-full" />
            </div>
            <div className="insight__footer-text">Temp trend: &darr;</div>
          </div>
          <div className="insight__footer-item insight__footer-item--tasks">
            <div className="insight__footer-icon">
              <ClipboardList className="w-full h-full" />
            </div>
            <div className="insight__footer-text">Tasks today: 5</div>
          </div>
          <div className="insight__footer-item insight__footer-item--notes">
            <div className="insight__footer-icon">
              <NotebookTabs className="w-full h-full" />
            </div>
            <div className="insight__footer-text">Notes updates: 1</div>
          </div>
        </div>
      </div>
    </section>
  );
}

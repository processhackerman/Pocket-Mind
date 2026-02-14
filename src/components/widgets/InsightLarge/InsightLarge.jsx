import Logo from "../../ui/Logo";
import brain_icon from "../../../assets/images/brain.png";
import "./InsightLarge.scss";
import { ClipboardList, Notebook, Thermometer } from "lucide-react";

export default function InsightLarge({ insight }) {
  return (
    <div className="insight-large">
      <div className="insight-large__inner flex h-full justify-between rounded-widget items-center relative overflow-hidden widget-shadow">
        <div className="insight-large__main max-w-[60%] h-full items-start flex justify-evenly flex-col pl-1">
          <div className="insight-large__logo">
            <Logo text="AI Insight" />
          </div>
          <div className="insight-large__body flex flex-col gap-4">
            <div className="insight-large__main-text insight__main-text font-semibold leading-snug">
              {insight?.mainText}
            </div>
            <div className="insight-advice">
              {insight?.advice?.map((item, index) => (
                <div
                  className="insight__advice flex items-center gap-s leading-tight opacity-70"
                  key={index}
                >
                  <span className="insight-advice-icon">&rarr;</span>
                  <span className="insight-advice-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="insight-large__indicators grid grid-cols-[1fr_auto] grid-rows-2 gap-2 mt-3 flex-shrink">
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
                <Notebook className="w-full h-full" />
              </div>
              <div className="insight__footer-text">Notes updates: 1</div>
            </div>
          </div>
        </div>
        <div className="divider h-full"></div>
        <div className="insight-large__additive flex flex-col justify-evenly items-center">
          <div className="insight-large__image">
            <img
              src={brain_icon}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="insight-large__buttons flex flex-col items-stretch gap-2">
            <button
              type="button"
              className="insight-large__button button-ai-chat text-black font-semibold"
            >
              Open AI Chat
            </button>
            <button
              type="button"
              className="insight-large__button button-analysis text-black font-semibold"
            >
              Full Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

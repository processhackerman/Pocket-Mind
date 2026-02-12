import "./DailyQuote.scss";
import WidgetHeader from "../../ui/WidgetHeader";
import { Quote, Triangle } from "lucide-react";

export default function DailyQuote({ quote }) {
  return (
    <div className="quote w-full p-xl pb-l flex flex-col rounded-widget">
      <WidgetHeader
        title="Daily Quote"
        label="Progress over perfection"
        icon={<Quote className="w-full h-full" />}
      />

      <div className="quote-container flex items-center mt-3 px-3 py-4 rounded-2xl">
        <div className="flex-1 max-w-[10%] h-0.5 bg-white"></div>
        <div className="w-3 h-3 rounded-full">
          <Triangle className="w-full h-full rotate-90" />
        </div>
        <div className="quote-text text-sm mx-2 font-bold">{quote}</div>
        <div className="w-3 h-3 rounded-full">
          <Triangle className="w-full h-full -rotate-90" />
        </div>
        <div className="flex-1 h-0.5 bg-white"></div>
      </div>
    </div>
  );
}

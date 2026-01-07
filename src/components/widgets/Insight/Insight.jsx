import Logo from "../../ui/Logo";
import arrow_up from "../../../assets/icons/arrow-up.svg";
import thermometer_icon from "../../../assets/icons/thermometer.png";
import tasks_icon from "../../../assets/icons/tasks.png";
import noter_icon from "../../../assets/icons/notes.png";
import formatText from "../../../lib/formatText.jsx";
import "./Insight.scss";

export default function Insight({ insight }) {
    return (
        <section className="insight">
            <div className="insight__inner">
                <div className="insight__header">
                    <div className="insight__logo">
                        <Logo text="AI Insight" />
                    </div>
                    <div className="insight__icon">
                        <img src={arrow_up} alt="" />
                    </div>
                </div>

                <div className="insight__body">
                    <div className="insight__main-text">
                        {formatText(insight?.mainText)}
                    </div>
                    <div className="insight__advices">
                        {insight?.advices?.map((item, index) => (
                            <div className="insight__advice" key={index}>
                                <span className="insight__advice-icon">
                                    &rarr;
                                </span>
                                <span className="insight__advice-text">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="insight__footer">
                    <div className="insight__footer-item insight__footer-item--temperature">
                        <div className="insight__footer-icon">
                            <img src={thermometer_icon} alt="" />
                        </div>
                        <div className="insight__footer-text">
                            Temp trend: &darr;
                        </div>
                    </div>
                    <div className="insight__footer-item insight__footer-item--tasks">
                        <div className="insight__footer-icon">
                            <img src={tasks_icon} alt="" />
                        </div>
                        <div className="insight__footer-text">
                            Tasks today: 5
                        </div>
                    </div>
                    <div className="insight__footer-item insight__footer-item--notes">
                        <div className="insight__footer-icon">
                            <img src={noter_icon} alt="" />
                        </div>
                        <div className="insight__footer-text">
                            Notes updates: 1
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

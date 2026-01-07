import ai_logo from "../../assets/icons/ai-logo.png";

export default function Logo({ text }) {
    return (
        <div className="logo">
            <h3>{text}</h3>
            <div className="logo-img">
                <img src={ai_logo} alt="" />
            </div>
        </div>
    );
}

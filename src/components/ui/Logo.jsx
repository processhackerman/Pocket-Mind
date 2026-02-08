import ai_logo from "../../assets/icons/ai-logo.png";

export default function Logo({ text }) {
  return (
    <div className="logo flex justify-stretch items-center">
      <h3 className="logo__text font-bold text-accent-primary">{text}</h3>
      <div className="logo__icon aspect-square">
        <img src={ai_logo} alt="Pocket Mind Logo" />
      </div>
    </div>
  );
}

import ai_logo from "../../assets/icons/ai-logo.png";

export default function Logo({ text }) {
  return (
    <div className="flex justify-stretch items-center">
      <h3 className="text-[clamp(0.75rem,0.5769rem+0.7692vw,1.5rem)] font-bold text-accent-primary">
        {text}
      </h3>
      <div className="w-6 aspect-square">
        <img src={ai_logo} alt="" />
      </div>
    </div>
  );
}

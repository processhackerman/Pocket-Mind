export default function MenuButton() {
  return (
    <button type="button" className="flex flex-col gap-[3px]">
      <div className="w-[clamp(1rem,5vw,2rem)] h-0.5 rounded-full bg-gray-200"></div>
      <div className="w-[clamp(1rem,5vw,2rem)] h-0.5 rounded-full bg-gray-200"></div>
      <div className="w-[clamp(1rem,5vw,2rem)] h-0.5 rounded-full bg-gray-200"></div>
    </button>
  );
}

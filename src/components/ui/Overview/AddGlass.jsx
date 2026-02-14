import droplet_icon from "../../../assets/icons/add-glass-droplet.svg";

export default function AddGlass() {
  return (
    <div className="widget-shadow add-glass-button flex flex-col justify-between items-stretch p-m px-xl">
      <div className="add-glass-button__icon text-center flex-1 relative flex justify-center">
        <div className="add-glass-button__image w-[15vw]">
          <img src={droplet_icon} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="add-glass-button__text text-tiny text-center">
        Add glass
      </div>
    </div>
  );
}

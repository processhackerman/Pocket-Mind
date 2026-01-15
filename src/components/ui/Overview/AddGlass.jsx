import droplet_icon from "../../../assets/icons/add-glass-droplet.svg";

export default function AddGlass() {
  return (
    <div className="add-glass-button flex flex-col justify-between items-stretch p-m">
      <div className="add-glass-button__icon text-center flex-1 relative flex justify-center">
        <div className="add-glass-button__image w-12">
          <img src={droplet_icon} alt="" />
        </div>
      </div>
      <div className="add-glass-button__text text-tiny text-center">
        Add glass
      </div>
    </div>
  );
}

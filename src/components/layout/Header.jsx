import Logo from "../ui/Logo";
import MenuButton from "../ui/MenuButton";

export default function Header() {
  return (
    <header className="header flex justify-between items-center px-5 min-h-[5vh]">
      <MenuButton />
      <Logo text="Pocket Mind" />
    </header>
  );
}

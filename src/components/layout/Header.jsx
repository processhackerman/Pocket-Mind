import Logo from "../ui/Logo";
import MenuButton from "../ui/MenuButton";
import ai_icon from "../../assets/icons/ai-logo.png";
import {
  Check,
  ClipboardList,
  CloudDrizzle,
  Home,
  Settings,
  Sparkles,
} from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="header flex justify-between items-center px-5 min-h-[5vh] md:hidden">
        <MenuButton />
        <Logo text="Pocket Mind" />
      </header>
      <header className="header hidden md:flex flex-col w-16 h-screen fixed left-0 top-0">
        <div className="logo mx-auto w-12 h-12 mt-3">
          <img src={ai_icon} className="w-full h-full" alt="" />
        </div>
        <nav className="header__nav flex flex-col items-center gap-5 mt-7">
          <button className="w-7 h-7">
            <Home className="w-full h-full" color="#00E6B0" />
          </button>
          <button className="w-7 h-7">
            <ClipboardList className="w-full h-full" color="#00E6B0" />
          </button>
          <button className="w-7 h-7">
            <Check className="w-full h-full" color="#00E6B0" />
          </button>
          <button className="w-7 h-7">
            <CloudDrizzle className="w-full h-full" color="#00E6B0" />
          </button>
          <button className="w-7 h-7">
            <Sparkles className="w-full h-full" color="#00E6B0" />
          </button>
          <button className="w-7 h-7">
            <Settings className="w-full h-full" color="#00E6B0" />
          </button>
        </nav>
      </header>
    </>
  );
}

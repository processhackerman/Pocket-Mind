import { Brain, ClipboardList, Notebook, Settings } from "lucide-react";
import footerShape from "../../../assets/images/navbar-shape.svg";
import centerButton from "../../../assets/images/navbar-button.svg";
import "./MobileNavbar.scss";

export default function MobileNavbar({ onNav = () => {} }) {
  function NavButton({ icon, label }) {
    return (
      <button
        aria-label={label}
        onClick={() => onNav("home")}
        className="footer-button h-full flex-1 flex flex-col justify-evenly rounded-widget bg-[#11181C] items-center"
      >
        <div className="footer-button__icon aspect-square">{icon}</div>
        <div className="nav-label">{label}</div>
      </button>
    );
  }

  return (
    // visible only on small screens (hidden at md and up)
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95vw] md:hidden z-50"
      // ensure iPhone safe area is respected
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="relative">
        {/* SVG background (pill with center cutout) */}
        <img
          src={footerShape}
          alt=""
          aria-hidden="true"
          className="w-full select-none pointer-events-none"
        />

        {/* Buttons overlayed on top of the SVG */}
        <div className="absolute inset-0 flex items-center justify-between px-[1vw] gap-[25%]">
          {/* left two buttons */}
          <div className="flex flex-1 items-center h-1/2 gap-1">
            <NavButton
              icon={<Brain className="w-full h-full" />}
              label="Home"
            />

            <NavButton
              icon={<Notebook className="w-full h-full" />}
              label="Notes"
            />
          </div>

          {/* right two buttons */}
          <div className="flex flex-1 items-center h-1/2 gap-1">
            <NavButton
              icon={<ClipboardList className="w-full h-full" />}
              label="Tasks"
            />

            <NavButton
              icon={<Settings className="w-full h-full" />}
              label="Settings"
            />
          </div>
        </div>

        {/* central glowing knob — placed on top/center of svg cutout */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-full">
          <button
            aria-label="Primary action"
            onClick={() => onNav("primary")}
            className="center-button relative h-full aspect-square rounded-full flex items-center justify-center"
          >
            {/* inner dot */}
            <img
              src={centerButton}
              className="w-full h-full center-button-image"
              alt=""
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

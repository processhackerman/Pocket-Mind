import Logo from "../ui/Logo";
import MenuButton from "../ui/MenuButton";
import ai_icon from "../../assets/icons/ai-logo.png";
import user_avatar from "../../assets/icons/user-avatar.svg";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  Check,
  ClipboardList,
  CloudDrizzle,
  Home,
  Settings,
  Sparkles,
  MessageSquare,
  ChevronRight,
  User,
  ArrowRight,
} from "lucide-react";
import useBreakpoint from "../../hooks/useBreakpoint";

export default function Header() {
  const { current } = useBreakpoint();

  // 1. State to control the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const menuItems = [
    { icon: Home, label: "Home", active: true },
    { icon: ClipboardList, label: "Notes", active: false },
    { icon: Check, label: "Tasks", active: false },
    { icon: Sparkles, label: "Overview", active: false },
    { icon: MessageSquare, label: "AI Chat", active: false },
    { icon: CloudDrizzle, label: "Weather", active: false },
  ];

  return (
    <>
      {/* --- MOBILE HEADER (sm) --- */}
      {current === "sm" && (
        <>
          <header className="header flex justify-between items-center px-5 min-h-[5vh] border-b border-dark-2 bg-[#090d0f] relative z-20">
            {/* Pass the toggle function to your MenuButton */}
            <div onClick={() => setIsMobileMenuOpen(true)}>
              <MenuButton />
            </div>
            <Logo text="Pocket Mind" />
          </header>

          {/* --- MOBILE FULLSCREEN MENU OVERLAY --- */}
          {/* We use fixed inset-0 to cover the whole screen */}
          <div
            className={`fixed inset-0 bg-[#090d0f] z-50 transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full p-4">
              {/* Header inside Menu (Logo + Close Button) */}
              <div className="flex justify-between items-center mb-10">
                <Logo text="Pocket Mind" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                      item.active
                        ? "bg-dark-3 text-accent-primary"
                        : "text-gray-400 hover:bg-dark-3/50 hover:text-white"
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="text-xl font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>

              {/* Bottom Actions (Settings/Profile) */}
              <div className="mt-auto flex flex-col gap-6">
                <button className="flex items-center gap-4 text-gray-400 p-2">
                  <Settings className="w-6 h-6" />
                  <span className="text-lg">Settings</span>
                </button>

                <div className="flex items-center gap-4 p-4 bg-dark-3 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                    <User className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Placeholder Name</p>
                    <p className="text-accent-primary text-sm">
                      Upgrade to Pro
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* --- TABLET/LAPTOP (md & lg) - Icons Only --- */}
      {(current === "md" || current === "lg") && (
        <header className="header hidden md:flex flex-col w-16 h-screen fixed left-0 top-0 border-r border-dark-2 bg-[#090d0f]">
          <div className="logo mx-auto w-12 h-12 mt-3">
            <img
              src={ai_icon}
              className="w-full h-full object-contain"
              alt="AI Logo"
            />
          </div>
          <nav className="header__nav flex flex-col items-center gap-6 mt-10">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-6 h-6 text-accent-primary hover:text-white transition-colors"
              >
                <item.icon className="w-full h-full" />
              </button>
            ))}
            <button className="w-6 h-6 mt-auto mb-8 text-accent-primary">
              <Settings className="w-full h-full" />
            </button>
          </nav>
        </header>
      )}

      {/* --- WIDE SCREEN (xl >= 1640px) - Full Sidebar --- */}
      {current === "xl" && (
        <header className="header flex flex-col w-[16vw] h-screen fixed left-0 top-0 border-r border-dark-2 bg-[#090d0f] p-6 justify-between">
          {/* Top Section */}
          <div>
            <div className="flex items-center gap-2 mb-10">
              <Logo text="Pocket Mind" />
            </div>

            <nav className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-between w-full p-3 rounded-lg transition-all group ${
                    item.active
                      ? "bg-dark-3 text-white relative overflow-hidden"
                      : "text-gray-400 hover:text-white hover:bg-dark-3/50"
                  }`}
                >
                  {/* Cyan Active Indicator Bar */}
                  {item.active && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-primary h-full rounded-l-lg" />
                  )}

                  <div className="flex items-center gap-3">
                    <item.icon
                      className={`w-5 h-5 ${item.active ? "text-white" : "text-gray-500 group-hover:text-white"}`}
                    />
                    <span className="font-medium text-lg">{item.label}</span>
                  </div>

                  {/* Chevron only shows for inactive items, or always if you prefer */}
                  <ChevronRight
                    className={`w-5 h-5 ${item.active ? "text-white" : "text-gray-600"}`}
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-6">
            {/* Settings Link */}
            <button className="flex items-center justify-between text-gray-400 hover:text-white w-full px-2">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5" />
                <span className="text-lg font-medium">Settings</span>
              </div>
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3 px-2">
              {/* Replace src with your user image variable */}
              <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                <User className="w-full h-full p-2 text-gray-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm">
                  Placeholder Name
                </span>
                <span className="text-gray-500 text-xs">Account settings</span>
              </div>
            </div>

            {/* Upgrade Button */}
            <button className="button-upgrade-to-pro w-full py-3 px-4 rounded-xl border border-accent-primary/50 flex items-center justify-between group hover:border-accent-primary transition-all">
              <span className="font-bold text-white">Upgrade to Pro</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </header>
      )}
    </>
  );
}

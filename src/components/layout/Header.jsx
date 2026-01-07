import Logo from "../ui/Logo";
import MenuButton from "../ui/MenuButton";

export default function Header() {
    return (
        <header className="header">
            <MenuButton />
            <Logo text="Pocket Mind" />
        </header>
    );
}

export default function UserWelcome({ welcome_text }) {
    return (
        <div className="welcome">
            <div className="left"></div>
            <div className="welcome-text">
                {welcome_text ? welcome_text : "Good morning, User..."}
            </div>
            <div className="right"></div>
        </div>
    );
}

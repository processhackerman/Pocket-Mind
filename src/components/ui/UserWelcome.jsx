export default function UserWelcome({ welcome_text }) {
  return (
    <div className="welcome flex justify-center items-center mt-6 mb-3 text-center">
      <div className="left h-[1px] flex-1"></div>
      <div className="welcome-text py-2 px-6 relative">
        {welcome_text ? welcome_text : "Good morning, User..."}
      </div>
      <div className="right h-[1px] flex-1"></div>
    </div>
  );
}

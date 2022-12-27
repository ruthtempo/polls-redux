import { Link } from "react-router-dom";
import { Button } from "../ui/Button.js";

export const Navbar = () => {
  return (
    <nav className="w-full bg-indigo-200 p-4 flex justify-between">
      <div className="flex items-center justify-items-center">
        <Link to="home" className="p-2 uppercase">
          Dashboard
        </Link>
        <Link to="new poll" className="p-2 uppercase">
          New Poll
        </Link>
        <Link to="leaderboard" className="p-2 uppercase">
          LeaderBoard
        </Link>
      </div>
      <div className="flex flex-col">
        user +avatar
        <Button buttonText={"Log out"} />
      </div>
    </nav>
  );
};

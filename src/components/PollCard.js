import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button";

export const PollCard = ({ poll }) => {
  const date = new Date(poll.timestamp);
  return (
    <div className="bg-indigo-200 flex flex-col m-2 p-2 w-80 h-48 rounded-lg drop-shadow-md justify-center items-center">
      <p className="capitalize">{poll.author}</p>
      <span>
        {date.toLocaleTimeString()} | {date.toLocaleDateString()}
      </span>
      <NavLink to={`/questions/${poll.id}`} className="w-2/3">
        <Button buttonText={"Show"} className="w-full" />
      </NavLink>
    </div>
  );
};

import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button";

export const PollCard = ({ poll }) => {
  const date = new Date(poll.timestamp);
  return (
    <div className="bg-indigo-300 flex flex-col w-3/4 md:w-80 h-48 rounded-lg drop-shadow-md justify-center items-center border-indigo-200 border-solid border-2">
      <p className="capitalize  text-lg">{poll.author}</p>
      <span className="text-indigo-100">
        {date.toLocaleTimeString()} | {date.toLocaleDateString()}
      </span>
      <NavLink to={`/questions/${poll.id}`} className="w-2/3">
        <Button buttonText={"Show"} className="w-full" />
      </NavLink>
    </div>
  );
};

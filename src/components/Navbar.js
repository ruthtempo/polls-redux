import { connect } from "react-redux";
import setAuthedUser from "../actions/authedUser.js";
import { Button } from "../ui/Button.js";
import { NavLink } from "../ui/NavLink.js";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const Navbar = (props) => {
  return (
    <nav className="bg-indigo-200 p-2 flex justify-between">
      <div className="flex items-center justify-items-center ml-6">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="new-poll">New Poll</NavLink>
        <NavLink to="leaderboard">Leaderboard</NavLink>
      </div>
      <div className="flex w-2/5 content-center justify-end items-center">
        <div className="flex items-center ">
          <img
            src={props.authedUser.avatarURL}
            alt="user-avatar"
            className="object-contain rounded-full mr-3 w-20"
          />
          <p className="text-lg mr-3">{props.authedUser.id}</p>
        </div>
        <div
          className="flex items-center cursor-pointer hover:text-indigo-600 mr-6"
          onClick={() => props.dispatch(setAuthedUser(null))}
        >
          <ArrowRightOnRectangleIcon className="w-9" />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser: users[authedUser], //we retrieve the authedUser id, we use it to get the whole suer object from users.
});

export default connect(mapStateToProps)(Navbar);

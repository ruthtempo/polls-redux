import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { connect } from "react-redux";
import setAuthedUser from "../actions/authedUser.js";
import { NavLink } from "../ui/NavLink.js";

const Navbar = (props) => {
  return (
    <nav className="flex justify-between py-4 flex-col md:flex-row">
      <div className="flex items-center px-4">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="new-poll">New Poll</NavLink>
        <NavLink to="leaderboard">Leaderboard</NavLink>
      </div>
      <div className="flex">
        <div className="flex items-center px-4">
          <img
            src={props.authedUser.avatarURL}
            alt="user-avatar"
            className="object-contain rounded-full mr-3 w-11"
          />
          <p className="text-lg mr-3">{props.authedUser.id}</p>
        </div>
        <div
          className="flex items-center cursor-pointer hover:text-indigo-600 mr-6"
          onClick={() => props.dispatch(setAuthedUser(null))}
        >
          <ArrowRightOnRectangleIcon className="w-6" />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser: users[authedUser], //we retrieve the authedUser id, we use it to get the whole suer object from users.
});

export default connect(mapStateToProps)(Navbar);

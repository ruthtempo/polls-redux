import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import setAuthedUser from "../actions/authedUser.js";
import { Button } from "../ui/Button.js";

const Navbar = (props) => {
  return (
    <nav className="w-full bg-indigo-200 p-4 flex justify-between">
      <div className="flex items-center justify-items-center">
        <NavLink
          to="/"
          className={`pr-2 ${({ isActive }) =>
            isActive ? "text-indigo-600 uppercase" : ""}`}
        >
          Dashboard
        </NavLink>
        <NavLink to="new poll">New Poll</NavLink>
        <NavLink to="leaderboard">LeaderBoard</NavLink>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="rounded-full bg-gray-200 mr-3 w-20">
            <img
              src={props.authedUser.avatarURL}
              alt="user-avatar"
              className="object-contain rounded-full"
            />
          </div>
          <p className="text-lg mr-3">{props.authedUser.id}</p>
        </div>

        <Button
          buttonText={"Log out"}
          onClick={() => props.dispatch(setAuthedUser(null))}
        />
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Navbar);

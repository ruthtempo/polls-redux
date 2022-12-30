import { connect } from "react-redux";
import setAuthedUser from "../actions/authedUser.js";
import { Button } from "../ui/Button.js";
import { NavLink } from "../ui/NavLink.js";

const Navbar = (props) => {
  return (
    <nav className="w-full bg-indigo-200 p-4 flex justify-between">
      <div className="flex items-center justify-items-center">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="new-poll">New Poll</NavLink>
        <NavLink to="leaderboard">Leaderboard</NavLink>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <img
            src={props.authedUser.avatarURL}
            alt="user-avatar"
            className="object-contain rounded-full mr-3 w-20"
          />
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

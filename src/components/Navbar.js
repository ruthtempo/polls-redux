import { connect } from "react-redux";
import { Link } from "react-router-dom";
import setAuthedUser from "../actions/authedUser.js";
import { Button } from "../ui/Button.js";

const Navbar = (props) => {
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

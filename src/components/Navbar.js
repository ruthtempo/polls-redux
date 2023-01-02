import {
  ArrowRightOnRectangleIcon,
  Bars4Icon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { connect } from "react-redux";
import setAuthedUser from "../actions/authedUser.js";
import { DropdownButton } from "../ui/DropdownButton.js";
import { DropdownItem } from "../ui/DropdownItem.js";
import { NavLink } from "../ui/NavLink.js";

const Navbar = (props) => {
  return (
    <nav className="flex justify-between py-4">
      <DropdownButton
        icon={Bars4Icon}
        iconCollapsed={Bars4Icon}
        className="md:hidden"
      >
        <DropdownItem></DropdownItem>
      </DropdownButton>
      <div className=" items-center px-4 hidden md:flex">
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

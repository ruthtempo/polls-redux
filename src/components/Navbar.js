import {
  ArrowRightOnRectangleIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { connect } from "react-redux";
import setAuthedUser from "../actions/authedUser.js";
import { NavLink } from "../ui/NavLink.js";

const Navbar = (props) => {
  return (
    <>
      <MobileNavBar {...props} />
      <nav className="flex md:justify-between py-4">
        <div className="items-center px-4 hidden md:flex">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="new-poll">New Poll</NavLink>
          <NavLink to="leaderboard">Leaderboard</NavLink>
        </div>
        <div className=" hidden md:flex">
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
    </>
  );
};

const MobileNavBar = (props) => {
  const [showUser, setShowUser] = useState(false);
  const [showNav, setShowNav] = useState(false);
  return (
    <div
      className={`md:hidden items-center w-full ${
        showUser || showNav ? "bg-indigo-300" : ""
      }`}
    >
      <div className="flex flex-col">
        <div className="flex justify-between p-3 items-center">
          <div
            onClick={() => {
              setShowNav(!showNav);
              setShowUser(false);
            }}
          >
            {showNav ? (
              <XMarkIcon className="w-11" />
            ) : (
              <Bars4Icon className="w-11" />
            )}
          </div>
          <div
            onClick={() => {
              setShowUser(!showUser);
              setShowNav(false);
            }}
          >
            <img
              src={props.authedUser.avatarURL}
              alt="user-avatar"
              className="rounded-full w-11"
            />
          </div>
        </div>
        <div>
          {showUser && (
            <div className="flex flex-col items-end absolute right-0 bg-white w-full p-4">
              <div>
                <p className="pb-3">{props.authedUser.id}</p>
                <div
                  onClick={() => props.dispatch(setAuthedUser(null))}
                  className="flex"
                >
                  <p>Logout</p>
                  <ArrowRightOnRectangleIcon className="w-6" />
                </div>
              </div>
            </div>
          )}
          {showNav && (
            <div className="flex flex-col absolute bg-white w-full p-4">
              <NavLink to="/" onClick={() => setShowNav(false)}>
                Dashboard
              </NavLink>
              <NavLink to="new-poll" onClick={() => setShowNav(false)}>
                New Poll
              </NavLink>
              <NavLink to="leaderboard" onClick={() => setShowNav(false)}>
                Leaderboard
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser: users[authedUser], //we retrieve the authedUser id, we use it to get the whole suer object from users.
});

export default connect(mapStateToProps)(Navbar);

import {
  ArrowRightOnRectangleIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { createSelector } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setAuthedUser from "../actions/authedUser.js";
import { NavLink } from "../ui/NavLink.js";

const authedUserObj = createSelector(
  (state) => state.users,
  (state) => state.authedUser,
  (users, authedUser) => users[authedUser]
);
export const Navbar = () => {
  // const authedUser = useSelector((state) => state.authedUser);
  // const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  // const currentUser = users[authedUser];
  const currentUser = useSelector(authedUserObj);

  return (
    <>
      <MobileNavBar />
      <nav className="flex md:justify-between py-4">
        <div className="items-center px-4 hidden md:flex">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="add">New Poll</NavLink>
          <NavLink to="leaderboard">Leaderboard</NavLink>
        </div>
        <div className="hidden md:flex">
          <div className="flex items-center px-4">
            <img
              src={currentUser.avatarURL}
              alt="user-avatar"
              className="object-contain rounded-full mr-3 w-11"
            />
            <p className="text-lg mr-3">{currentUser.id}</p>
          </div>
          <div
            className="flex items-center cursor-pointer hover:text-indigo-600 mr-6"
            onClick={() => dispatch(setAuthedUser(null))}
          >
            <ArrowRightOnRectangleIcon className="w-6" />
          </div>
        </div>
      </nav>
    </>
  );
};

const MobileNavBar = () => {
  const [showUser, setShowUser] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(authedUserObj);
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
              src={currentUser.avatarURL}
              alt="user-avatar"
              className="rounded-full w-11"
            />
          </div>
        </div>
        <div>
          {showUser && (
            <div className="flex flex-col items-end absolute right-0 bg-white w-full p-4">
              <div>
                <p className="pb-3 capitalize">{currentUser.id}</p>
                <div
                  onClick={() => dispatch(setAuthedUser(null))}
                  className="flex justify-end"
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
              <NavLink to="add" onClick={() => setShowNav(false)}>
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

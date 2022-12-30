import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/Login";
import HomeRoute from "./components/HomeRoute";
import Navbar from "./components/Navbar";
import { Leaderboard } from "./components/Leaderboard";
import { handleInitialUsersData } from "./actions/users";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialUsersData());
  }, []);

  return (
    <div className="h-screen w-full bg-indigo-100">
      {/* if autheduser show navbar+routes, else show loginform */}
      {props.authedUser !== null ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/*" element={<HomeRoute />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}
const mapStateToProps = ({ authedUser }) => ({
  // access state props (input state)
  authedUser, // return state prop (output props)
});
export default connect(mapStateToProps)(App);

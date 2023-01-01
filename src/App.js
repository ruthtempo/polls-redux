import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/Login";
import HomeRoute from "./components/HomeRoute";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Leaderboard from "./components/Leaderboard";
import { handleInitialUsersData } from "./actions/users";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import NewPoll from "./components/NewPoll";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialUsersData());
  }, [props]);

  return (
    <div>
      {props.authedUser !== null ? (
        <>
          <Navbar />
          <LoadingBar
            style={{ backgroundColor: "mediumSlateBlue", height: "5px" }}
          />
          <Routes>
            <Route path="/*" element={<HomeRoute />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/new-poll" element={<NewPoll />} />
            <Route path="*" element={<NotFound />} />
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

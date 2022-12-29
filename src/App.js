import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PollView from "./components/PollView";
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
            <Route path="/" element={<Home />} />
            <Route path="/questions/question:id" element={<PollView />} />
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

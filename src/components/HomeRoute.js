import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import PollDetails from "./PollDetails";
import { connect } from "react-redux";
import { useEffect } from "react";
import { handleInitialQuestionsData } from "../actions/questions";

const HomeRoute = (props) => {
  // this component is accessed through App and Home & Polldetails, since they need the same dispatch.
  useEffect(() => {
    props.dispatch(handleInitialQuestionsData());
  }, []);

  return (
    <Routes>
      <Route path="/questions/:question_id" element={<PollDetails />} />
      <Route index element={<Home />} />
    </Routes>
  );
};

export default connect()(HomeRoute);

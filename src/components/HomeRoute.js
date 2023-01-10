import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import PollDetails from "./PollDetails";
import { connect } from "react-redux";
import { useEffect } from "react";
import { handleInitialQuestionsData } from "../actions/questions";
import NewPoll from "./NewPoll";

const HomeRoute = (props) => {
  // this component is accessed through App and Home & Polldetails, since they need the same dispatch.
  useEffect(() => {
    props.dispatch(handleInitialQuestionsData());
  }, [props]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/questions/:question_id" element={<PollDetails />} />
      <Route path="add" element={<NewPoll />} />
    </Routes>
  );
};

export default connect()(HomeRoute);

import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialQuestionsData } from "../actions/questions";

const Home = (props) => {
  console.log("dispatch", props);
  useEffect(() => {
    props.dispatch(handleInitialQuestionsData());
  }, []);

  return (
    <div className="grid grid-rows-2 grid-cols-1">
      <div className="">
        <h2>New Polls</h2>
      </div>
      <div>
        <h2>Answered Polls</h2>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Home);

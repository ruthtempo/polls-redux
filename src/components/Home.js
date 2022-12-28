import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialQuestionsData } from "../actions/questions";
import { Button } from "../ui/Button";
import { PollCard } from "./PollCard";

const Home = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialQuestionsData());
  }, []);

  return (
    <div className="flex flex-col">
      <div className=" flex justify-center items-center mb-4 border-2 border-indigo-300 border-dotted h-16">
        New Polls
      </div>
      <div className="flex flex-wrap justify-center">
        {props.unansweredPolls?.map((poll) => (
          <PollCard poll={poll} />
        ))}
      </div>
      <h3 className=" flex justify-center items-center mb-4 border-2 border-indigo-300 border-dotted  h-16 mt-4">
        Answered Polls
      </h3>
      <div className="flex flex-wrap justify-center">
        {props.answeredPolls?.map((poll) => (
          <PollCard poll={poll} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser }) => {
  const answeredPolls =
    questions &&
    Object.values(questions)
      .filter(
        (question) =>
          question.optionOne.votes.includes(authedUser.id) ||
          question.optionTwo.votes.includes(authedUser.id)
      )
      .sort((a, b) => a.timestamp - b.timestamp);

  const unansweredPolls =
    questions &&
    Object.values(questions)
      .filter(
        (question) =>
          !question.optionOne.votes.includes(authedUser.id) &&
          !question.optionTwo.votes.includes(authedUser.id)
      )
      .sort((a, b) => a.timestamp - b.timestamp);

  return { answeredPolls, unansweredPolls };
};

export default connect(mapStateToProps)(Home);

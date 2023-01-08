import { useState } from "react";
import { connect } from "react-redux";
import { PollCard } from "./PollCard";

const Home = (props) => {
  const [showNewPolls, setShowNewPolls] = useState(false);
  const [showAnsweredPolls, setShowAnsweredPolls] = useState(true);

  return (
    <div className="flex flex-col md:items-center justify-center">
      <h3 className="text-center text-3xl py-3">Dashboard</h3>
      <div className="flex flex-col pb-4 items-center">
        <label>
          <input
            className="rounded mr-4 cursor-pointer "
            type="checkbox"
            checked={showAnsweredPolls}
            onChange={() => setShowAnsweredPolls(!showAnsweredPolls)}
          />
          Answered
        </label>
        <label>
          <input
            className="rounded mr-4 cursor-pointer"
            type="checkbox"
            checked={showNewPolls}
            onChange={() => setShowNewPolls(!showNewPolls)}
          />
          New Polls
        </label>
      </div>

      {showNewPolls && (
        <>
          <h3 className="text-center mt-4 h-16 text-xl">New Polls</h3>
          <div className="grid gap-4 mb-4 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
            {props.loading
              ? null
              : props.unansweredPolls.map((poll) => (
                  <PollCard key={poll.id} poll={poll} />
                ))}
          </div>
        </>
      )}
      {showAnsweredPolls && (
        <>
          <h3 className="text-center mt-4 h-16 text-xl ">Answered Polls</h3>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
            {props.loading
              ? null
              : props.answeredPolls.map((poll) => (
                  <PollCard key={poll.id} poll={poll} />
                ))}
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser }) => {
  const answeredPolls =
    questions &&
    Object.values(questions)
      .filter(
        (question) =>
          question.optionOne.votes.includes(authedUser) ||
          question.optionTwo.votes.includes(authedUser)
      )
      .sort((a, b) => a.timestamp - b.timestamp);

  const unansweredPolls =
    questions &&
    Object.values(questions)
      .filter(
        (question) =>
          !question.optionOne.votes.includes(authedUser) &&
          !question.optionTwo.votes.includes(authedUser)
      )
      .sort((a, b) => a.timestamp - b.timestamp);

  const loading = questions === null; //if questions are not loaded it will be true (boolean);

  return { answeredPolls, unansweredPolls, loading };
};

export default connect(mapStateToProps)(Home);

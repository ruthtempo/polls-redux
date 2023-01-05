import { useState } from "react";
import { connect } from "react-redux";
import { PollCard } from "./PollCard";

const Home = (props) => {
  const [showNewPolls, setShowNewPolls] = useState(false);
  const [showAnsweredPolls, setShowAnsweredPolls] = useState(true);

  return (
    <div className="grid grid-cols-1 md:justify-items-center">
      <div className="flex flex-col items-center md:w-1/4 p-4 rounded">
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
            className="rounded mr-4  cursor-pointer"
            type="checkbox"
            checked={showNewPolls}
            onChange={() => setShowNewPolls(!showNewPolls)}
          />
          New Polls
        </label>
      </div>

      {showNewPolls && (
        <>
          <h3 className="text-center mb-4 h-16 text-2xl">New Polls</h3>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
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
          <h3 className="text-center my-4 h-16 text-2xl ">Answered Polls</h3>
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

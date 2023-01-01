import { connect } from "react-redux";
import { PollCard } from "./PollCard";

const Home = (props) => {
  return (
    <div className="grid grid-cols-1 justify-items-center">
      <h3 className="text-center mb-4 h-16 text-2xl flex items-center">
        New Polls
      </h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 justify-items-center">
        {props.loading
          ? null
          : props.unansweredPolls.map((poll) => (
              <PollCard key={poll.id} poll={poll} />
            ))}
      </div>
      <h3 className="text-center my-4 h-16 text-2xl flex items-center">
        Answered Polls
      </h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 justify-items-center">
        {props.loading
          ? null
          : props.answeredPolls.map((poll) => (
              <PollCard key={poll.id} poll={poll} />
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

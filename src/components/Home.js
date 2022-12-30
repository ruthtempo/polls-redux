import { connect } from "react-redux";
import { PollCard } from "./PollCard";

const Home = (props) => {
  return (
    <div className="flex flex-col">
      <div className=" flex justify-center items-center mb-4 border-2 border-indigo-300 border-dotted h-16">
        New Polls
      </div>
      <div className="flex flex-wrap justify-center">
        {props.loading
          ? null
          : props.unansweredPolls.map((poll) => (
              <PollCard key={poll.id} poll={poll} />
            ))}
      </div>
      <h3 className=" flex justify-center items-center mb-4 border-2 border-indigo-300 border-dotted  h-16 mt-4">
        Answered Polls
      </h3>
      <div className="flex flex-wrap justify-center">
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

  const loading = questions === null; //if questions are not loaded it will be true (boolean);

  return { answeredPolls, unansweredPolls, loading };
};

export default connect(mapStateToProps)(Home);

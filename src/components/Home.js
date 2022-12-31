import { connect } from "react-redux";
import { PollCard } from "./PollCard";

const Home = (props) => {
  return (
    <div className="flex flex-col w-full">
      <div className=" flex justify-center items-center mb-4 h-16 text-xl">
        New Polls
      </div>
      <div className="flex flex-wrap justify-center">
        {props.loading
          ? null
          : props.unansweredPolls.map((poll) => (
              <PollCard key={poll.id} poll={poll} />
            ))}
      </div>
      <h3 className=" flex justify-center items-center mb-4  h-16 mt-4 text-xl">
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

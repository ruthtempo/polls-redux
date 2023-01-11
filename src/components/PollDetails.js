import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleSaveAnswer } from "../actions/questions";
import { Option } from "../ui/Option";
import NotFound from "./NotFound";

const PollDetails = ({ questions, users, loading, authedUser, dispatch }) => {
  const { question_id } = useParams();

  const question = questions?.[question_id]; //to get the question matching the id received by router param

  const author = users?.[question?.author]; // to get the avatar that matches the poll author

  const hasChosenAnswer = authedUser && authedUser.answers[question_id] != null; //chech if id is in answers object to disable both buttons once poll is answered

  const totalQuestionVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  const getPercentage = (option) => {
    return Math.floor((option.votes.length * 100) / totalQuestionVotes);
  };

  return questions?.[question_id] == null ? (
    <NotFound />
  ) : (
    question && users && (
      <div className="bg-indigo-100 py-4 grid grid-cols-1 justify-items-center">
        {loading ? null : (
          <>
            <div className="flex flex-col items-center">
              <h5 className="text-2xl mb-4 text-gray-800">
                Poll by {question.author}
              </h5>
              <img
                src={author?.avatarURL}
                alt="user-avatar"
                className="rounded-full w-32 border-solid border-4 border-teal-200"
              />
              <h4 className="text-4xl my-4">Would you rather</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Option
                className="rounded-lg md:rounded-l-lg md:rounded-r-none"
                isSelected={authedUser.answers[question_id] === "optionOne"}
                disabled={hasChosenAnswer}
                onClick={() =>
                  dispatch(
                    handleSaveAnswer(authedUser.id, question_id, "optionOne")
                  )
                }
                percentage={getPercentage(question.optionOne, users)}
                votesLength={question.optionOne.votes.length}
                text={question.optionOne.text}
              />
              <Option
                className="rounded-lg md:rounded-r-lg md:rounded-l-none"
                isSelected={authedUser.answers[question_id] === "optionTwo"}
                disabled={hasChosenAnswer}
                onClick={() =>
                  dispatch(
                    handleSaveAnswer(authedUser.id, question_id, "optionTwo")
                  )
                }
                percentage={getPercentage(question.optionTwo, users)}
                votesLength={question.optionTwo.votes.length}
                text={question.optionTwo.text}
              />
            </div>
            {hasChosenAnswer && (
              <p className="text-center italic mt-4 text-gray-500">
                You already answered this poll
              </p>
            )}
          </>
        )}
      </div>
    )
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => {
  const loading = questions === null && users === null;

  return {
    questions,
    users,
    loading,
    authedUser: users[authedUser],
  };
};

export default connect(mapStateToProps)(PollDetails);

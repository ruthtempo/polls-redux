import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleSaveAnswer } from "../actions/questions";
import { Option } from "../ui/Option";

const PollDetails = ({ questions, users, loading, authedUser, dispatch }) => {
  const { question_id } = useParams();

  const question =
    questions && Object.values(questions).filter((q) => q.id === question_id); //to get the question matching the id received by router param
  const user =
    users &&
    question &&
    Object.values(users).filter((user) => user.id === question[0].author); // to get the avatar that matches the poll author

  const hasChosenAnswer = authedUser && authedUser.answers[question_id] != null; //chech if id is in answers object to disable both buttons once poll is answered
  return (
    question && (
      <div className="bg-indigo-100 py-4">
        {loading ? null : (
          <>
            <div className="flex flex-col items-center">
              <h4 className="text-2xl mb-4 text-gray-800">
                Poll by {question[0].author}
              </h4>
              <img
                src={user && user[0].avatarURL}
                alt="user-avatar"
                className="rounded-full w-32 border-solid border-4 border-teal-200"
              />
              <h4 className="text-4xl my-4 text-indigo-700 font-bold">
                Would you rather
              </h4>
            </div>

            <div className="flex flex-wrap flex-initial justify-center w-full">
              <Option
                className="rounded-l-lg w-full"
                disabled={hasChosenAnswer}
                onClick={() =>
                  dispatch(
                    handleSaveAnswer(authedUser.id, question_id, "optionOne")
                  )
                }
              >
                {question[0].optionOne.text}
              </Option>
              <Option
                className=" rounded-r-lg w-full"
                disabled={hasChosenAnswer}
                onClick={() =>
                  dispatch(
                    handleSaveAnswer(authedUser.id, question_id, "optionOne")
                  )
                }
              >
                {question[0].optionTwo.text}
              </Option>
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
    authedUser,
  };
};

export default connect(mapStateToProps)(PollDetails);

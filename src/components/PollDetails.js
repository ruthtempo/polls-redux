import { useState } from "react";
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

  const handleAnswerClick = () => {
    dispatch(handleSaveAnswer(authedUser.id, question_id, "optionOne"));
  };

  const percentageOption2 =
    questions &&
    Math.round(
      (question[0].optionTwo.votes.length * 100) / Object.keys(questions).length
    );
  const percentageOption1 =
    questions &&
    Math.round(
      (question[0].optionOne.votes.length * 100) / Object.keys(questions).length
    );

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
              <h4 className="text-4xl my-4">Would you rather</h4>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="mr-2">
                <Option
                  className={`rounded-l-lg w-full ${
                    authedUser.answers[question_id] === "optionOne"
                      ? "bg-teal-300"
                      : ""
                  }`}
                  disabled={hasChosenAnswer}
                  onClick={handleAnswerClick}
                >
                  {question[0].optionOne.text}
                </Option>
                {hasChosenAnswer && (
                  <p className="text-center text-gray-600">
                    {question[0].optionOne.votes.length} votes (
                    {percentageOption1} %)
                  </p>
                )}
              </div>
              <div className="">
                <Option
                  className={`rounded-r-lg w-full ${
                    authedUser.answers[question_id] === "optionTwo"
                      ? "bg-teal-300"
                      : ""
                  }`}
                  disabled={hasChosenAnswer}
                  onClick={handleAnswerClick}
                >
                  {question[0].optionTwo.text}
                </Option>
                {hasChosenAnswer && (
                  <p className="text-center text-gray-600">
                    {question[0].optionTwo.votes.length} votes (
                    {percentageOption2}%)
                  </p>
                )}
              </div>
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

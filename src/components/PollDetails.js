import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../ui/Button";
import { Option } from "../ui/Option";

const PollDetails = ({ questions, users }) => {
  const { question_id } = useParams();

  const question = Object.values(questions).filter((q) => q.id === question_id); //to get the question matching the id received by router param
  const user = Object.values(users).filter(
    (user) => user.id === question[0].author
  ); // to get the avatar that matches the poll author

  return (
    <div className="bg-indigo-100 py-4">
      <div className=" flex flex-col items-center">
        <h4 className="text-2xl mb-4"> Poll by {question[0].author}</h4>
        <img
          src={user[0].avatarURL}
          alt="user-avatar"
          className="rounded-full w-32"
        />
        <h4 className="text-4xl my-4"> Would you rather</h4>
      </div>

      <div className="flex flex-wrap flex-initial justify-center w-full">
        <Option className="rounded-l-lg w-full">
          {question[0].optionOne.text}
        </Option>
        <Option className="rounded-r-lg w-full">
          {question[0].optionTwo.text}
        </Option>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, users }) => ({
  questions,
  users,
});

export default connect(mapStateToProps)(PollDetails);

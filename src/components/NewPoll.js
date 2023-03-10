import { useState } from "react";
import { connect } from "react-redux";
import { Button } from "../ui/Button";
import { handleSaveNewQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewPoll = ({ authedUser, dispatch }) => {
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChangeO1 = (e) => {
    setOption1(e.target.value);
  };
  const handleChangeO2 = (e) => {
    setOption2(e.target.value);
  };

  const handleClick = () => {
    if (option1 && option2) {
      setError(false);
      const newQuestion = {
        optionOneText: option1,
        optionTwoText: option2,
        author: authedUser,
      };
      dispatch(handleSaveNewQuestion(newQuestion));
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex justify-center">
      <div className=" flex flex-col w-full 2xl:w-1/3 md:w-2/3 p-4">
        <p className="text-center text-lg py-3 text-gray-500">
          Create a New Poll
        </p>
        <p className="text-center text-3xl py-3">Would you Rather</p>
        <input
          placeholder="Option One"
          className="my-2 rounded-md p-2"
          onChange={handleChangeO1}
        />
        <input
          placeholder="Option Two"
          className="my-2 rounded-md p-2"
          onChange={handleChangeO2}
        />
        <Button buttonText={"Save"} onClick={handleClick} />
        {error && (
          <p className="text-red-600 text-center">
            Fill the two option fields to create a poll
          </p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NewPoll);

import { useState } from "react";
import { connect } from "react-redux";
import { Button } from "../ui/Button";
import { handleSaveNewQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewPoll = ({ authedUser, dispatch }) => {
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const navigate = useNavigate();

  const handleChangeO1 = (e) => {
    setOption1(e.target.value);
  };
  const handleChangeO2 = (e) => {
    setOption2(e.target.value);
  };

  const handleClick = () => {
    const newQuestion = {
      optionOneText: option1,
      optionTwoText: option2,
      author: authedUser,
    };
    dispatch(handleSaveNewQuestion(newQuestion));
    navigate("/");
  };

  return (
    <div className="flex justify-center">
      <div className=" flex flex-col w-full 2xl:w-1/4 md:w-2/3 p-4">
        <p className="text-center text-2xl py-3">Create a New Poll</p>
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
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NewPoll);

import { useState } from "react";
import { connect } from "react-redux";
import { Button } from "../ui/Button";

const NewPoll = ({ authedUser, dispatch }) => {
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();

  const handleChangeO1 = (e) => {
    setOption1(e.target.value);
  };
  const handleChangeO2 = (e) => {
    setOption2(e.target.value);
  };

  const handleSavePoll = () => {};

  return (
    <div className="flex justify-center">
      <div className=" flex flex-col w-full lg:w-1/2 p-4">
        <input
          placeholder="Option One"
          className="my-2 rounded-sm p-2"
          onChange={handleChangeO1}
        />
        <input
          placeholder="Option Two"
          className="my-2 rounded-sm p-2"
          onChange={handleChangeO2}
        />
        <Button buttonText={"Save"} onClick={""} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(NewPoll);

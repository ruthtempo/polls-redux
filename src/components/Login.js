import { useState } from "react";
import setAuthedUser from "../actions/authedUser";
import { Button } from "../ui/Button";
import { DropdownButton } from "../ui/DropdownButton";
import { DropdownItem } from "../ui/DropdownItem";
import { connect } from "react-redux";

const LoginForm = ({ dispatch, users, loading }) => {
  const [selectedUser, setSelectedUser] = useState();
  const [password, setPassword] = useState("password123");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (password === selectedUser.password) {
      dispatch(setAuthedUser(selectedUser.id));
    } else {
      console.log("wrong password");
    }
  };

  return (
    <div className="p-2 m-2 flex flex-col items-center ">
      <h1 className="text-3xl my-2">Employee Polls</h1>
      <div className="flex flex-col xl:w-2/5 w-3/4">
        <DropdownButton buttonText={selectedUser?.id ?? "choose user"}>
          {loading
            ? null
            : Object.values(users).map((user) => (
                <DropdownItem
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                >
                  {user.id}
                </DropdownItem>
              ))}
        </DropdownButton>
        <input
          type="password"
          placeholder="Enter your password"
          className="rounded-md p-2 my-2"
          onChange={handleChange}
        />
        <Button
          buttonText={"Log in"}
          onClick={handleSubmit}
          disabled={!selectedUser || !password}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({ loading: users === null, users });

export default connect(mapStateToProps)(LoginForm);

import { useState } from "react";
import setAuthedUser from "../actions/authedUser";
import { Button } from "../ui/Button";
import { DropdownButton } from "../ui/DropdownButton";
import { DropdownItem } from "../ui/DropdownItem";
import { connect } from "react-redux";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const LoginForm = ({ dispatch, users, loading }) => {
  const [selectedUser, setSelectedUser] = useState();
  const [password, setPassword] = useState();
  const [errorLogin, setErrorLogin] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (password === selectedUser.password) {
      dispatch(setAuthedUser(selectedUser.id));
    } else {
      setErrorLogin(true);
    }
  };

  return (
    <div className="p-2 m-2 flex flex-col items-center ">
      <h1 className="text-3xl my-2">Employee Polls</h1>
      <div className="flex flex-col xl:w-2/5 w-3/4">
        <DropdownButton
          dataTestid="login-dropdown"
          buttonText={selectedUser?.id ?? "choose user"}
          iconCollapsed={ChevronDownIcon}
          icon={ChevronUpIcon}
        >
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
          data-testid="password"
          value={password}
          type="password"
          placeholder="Enter your password"
          className="rounded-md p-2 my-2"
          onChange={handleChange}
        />
        {errorLogin && (
          <p
            className="text-red-600 text-center italic"
            data-testid="error-message"
          >
            Username and Password do not match
          </p>
        )}
        <Button
          dataTestid="login-button"
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

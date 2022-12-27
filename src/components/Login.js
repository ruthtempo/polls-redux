import { useState } from "react";
import { Button } from "../ui/Button";
import { DropdownButton } from "../ui/DropdownButton";

const LoginForm = () => {
  return (
    <div className="rounded bg-blue-100 p-2 m-2 flex justify-center">
      <form className="flex flex-col w-2/5">
        <DropdownButton buttonText={"choose user"} />
        <label className="mt-3">Password</label>
        <input className="rounded-md p-1 my-2" />
        <Button buttonText={"Log in"} />
      </form>
    </div>
  );
};

export default LoginForm;

import { useState } from "react";
import { Button } from "../ui/Button";

const Login = () => {
  const [userName, setUserName] = useState();

  return (
    <div>
      <Button buttonText={"Choose User"} />
    </div>
  );
};

export default Login;

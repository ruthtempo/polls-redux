import { Button } from "../ui/Button";
import notFound from "../media/notfound.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl py-4">No Results Found</p>
      <img src={notFound} />
      <Button buttonText={"Back to Home"} onClick={() => navigate("/")} />
    </div>
  );
};

export default NotFound;

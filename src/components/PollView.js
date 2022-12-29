import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Pollview = () => {
  const { pollDetails } = useParams();
  return <div></div>;
};

export default connect()(Pollview);

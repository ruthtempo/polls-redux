import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to="home">Dashboard</Link>
      <Link to="new poll">New Poll</Link>
      <Link to="leaderboard">LeaderBoard</Link>
    </nav>
  );
};

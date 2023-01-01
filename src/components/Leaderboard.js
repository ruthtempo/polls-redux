import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  return (
    users && (
      <div className="flex justify-center ">
        <table className="table-auto bg-indigo-200lg:w-2/3 2xl:w-1/3 xl:w-1/3 md:w-2/3">
          <thead className="h-11">
            <tr className="bg-indigo-400 text-white">
              <th>Users</th>
              <th>Answered</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(users).map((user) => (
              <tr key={user.id}>
                <td className="flex flex-col md:flex-row p-6 items-center">
                  <img
                    src={user.avatarURL}
                    alt="user-avatar"
                    className="object-contain rounded-full mr-3 w-9 lg:w-20"
                  />
                  <p>{user.id}</p>
                </td>
                <td className="text-end pr-6">
                  {Object.values(user.answers).length}
                </td>
                <td className="text-end pr-6">
                  {Object.values(user.questions).length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

const mapStateToProps = ({ users }) => {
  const usersWithTotalpolls = Object.values(users).map((user) => ({
    ...user,
    totalPoints:
      Object.values(user.questions).length + Object.values(user.answers).length,
  }));

  const sortedUsers = usersWithTotalpolls.sort(
    (a, b) => b.totalPoints - a.totalPoints
  );
  return {
    users: sortedUsers,
  };
};

export default connect(mapStateToProps)(Leaderboard);

import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  return (
    users && (
      <>
        <div className="flex justify-center hidden md:flex">
          <table className="table-auto bg-indigo-200 md:w-2/3 xl:w-1/2 2xl:w-1/3 rounded-lg border-separate border-teal-300 border-2">
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

        {/* Only in mobile sm screen */}
        {Object.values(users).map((user) => (
          <div className="md:hidden mx-2 my-4 shadow-lg rounded-lg bg-indigo-200 flex flex-col py-2 border-teal-400 border-2">
            <div className="flex items-center justify-center p-4">
              <img
                src={user.avatarURL}
                alt="user avatar"
                className="rounded-full w-9"
              />
              <div className="mx-2">{user.id}</div>
            </div>
            <div className="flex items-center justify-between p-4">
              <div>Answers</div>
              <div>{Object.values(user.answers).length}</div>
            </div>
            <div className="flex items-center justify-between p-4 ">
              <div>Created</div>
              <div>{Object.values(user.questions).length}</div>
            </div>
          </div>
        ))}
      </>
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

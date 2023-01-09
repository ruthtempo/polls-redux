import { store } from "../store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Leaderboard from "../components/Leaderboard";
import { receiveData } from "../actions/users";
import { users } from "../_DATA";

describe("leaderboard", () => {
  it("will match snapshot", () => {
    store.dispatch(receiveData(users));
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Leaderboard />
        </MemoryRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

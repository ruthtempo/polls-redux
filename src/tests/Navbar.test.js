import { Navbar } from "../components/Navbar";
import { store } from "../store";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

describe("Navbar", () => {
  it("will verify that the expected links are displayed", () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const dashboard = component.getAllByText("Dashboard");
    const newPoll = component.getAllByText("New Poll");
    const leaderboard = component.getAllByText("Leaderboard");

    expect(dashboard.length).toEqual(2);
    expect(newPoll.length).toEqual(2);
    expect(leaderboard.length).toEqual(2);
  });
});

import Navbar from "../components/Navbar";
import { store } from "../store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { receiveData } from "../actions/users";
import setAuthedUser from "../actions/authedUser";
import sarahAvatar from "../_DATA";

describe("Navbar", () => {
  it("will verify that the expected links are displayed", () => {
    store.dispatch(
      receiveData({
        sarahedo: {
          id: "sarahedo",
          password: "password123",
          name: "Sarah Edo",
          avatarURL: sarahAvatar,
          answers: {
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionTwo",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
        },
      })
    );

    store.dispatch(setAuthedUser("sarahedo"));

    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    const dashboard = component.getByText("Dashboard");
    const newPoll = component.getByText("New Poll");
    const leaderboard = component.getByText("Leaderboard");

    expect(dashboard).toBeInTheDocument();
    expect(newPoll).toBeInTheDocument();
    expect(leaderboard).toBeInTheDocument();
  });
});

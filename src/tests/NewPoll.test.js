import NewPoll from "../components/NewPoll";
import { store } from "../store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("NewPoll", () => {
  it("will match snapshot", () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <NewPoll />
        </MemoryRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

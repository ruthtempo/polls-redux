import Login from "../components/Login";
import { store } from "../store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { handleInitialUsersData } from "../actions/users";

describe("Login", () => {
  it.only("will display an ERROR message if the  password and user do not match and the login button is clicked", async () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    store.dispatch(handleInitialUsersData()); //dispatch to make users available
    const dropdown = component.getByTestId("login-dropdown");
    fireEvent.click(dropdown); //dropdown click to be able to access the user
    const userId = await waitFor(() => component.findByText("sarahedo"), {
      timeout: 2000,
    }); //we wait extra in order to have the users after the dispatch (1000ms)
    fireEvent.click(userId);
    const password = component.getByTestId("password");
    fireEvent.change(password, { target: { value: "password" } });
    const loginButton = component.getByTestId("login-button");
    fireEvent.click(loginButton);

    expect(component.getByTestId("error-message")).toBeInTheDocument();
  });
});

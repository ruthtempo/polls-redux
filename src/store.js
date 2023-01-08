import middleware from "./middleware";
import reducer from "./reducers";
import { createStore } from "redux";

export const store = createStore(reducer, middleware);

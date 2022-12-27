import { logger } from "./logger";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export default applyMiddleware(thunk, logger);

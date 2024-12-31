import userReducer from "./redux/Reducer";
import { createStore } from "redux";

const store = createStore(userReducer)

export default store
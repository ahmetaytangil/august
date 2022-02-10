import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/rootReducer";

const configureStore = () => {
    const middlewares = [thunk];
    const enhancer = applyMiddleware(...middlewares);
    const store = createStore(rootReducer(), enhancer);
    return store;
}

export default configureStore;
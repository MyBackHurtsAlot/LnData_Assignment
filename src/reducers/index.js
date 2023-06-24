import { combineReducers } from "redux";
import teamReducer from "./teamReducer";
import keywordReducer from "./keywordSearchReducer";
import triggerReducer from "./triggerReducer";

const rootReducer = combineReducers({
    team: teamReducer,
    keyword: keywordReducer,
    trigger: triggerReducer,
});

export default rootReducer;

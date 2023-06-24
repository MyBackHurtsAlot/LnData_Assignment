const triggerReducer = (state = false, action) => {
    switch (action.type) {
        case "SET_SEARCH_TRIGGERED":
            return action.payload;
        default:
            return state;
    }
};

export default triggerReducer;

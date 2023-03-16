const authReducer = (state={}, action) => {
    
    if(action.type === "REGISTER"){
        return action.payload;
    }
    return state;
};

export default authReducer;
const authReducer = (state={}, action) => {


    switch(action.type){
        case "REGISTER":
            return action.payload;  
        case "LOGOUT":
            return {};    
        default:
            return state;
    }   
 
   
};

export default authReducer;
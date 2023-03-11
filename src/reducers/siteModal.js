const initialState = {openClose: "closed", content: ""};


const siteModal = (state=initialState, action) =>{

    if(action.type === "OPEN_MODAL"){
        return action.payload;
    }

    return state;
};

export default siteModal;
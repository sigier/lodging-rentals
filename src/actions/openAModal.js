const openAModal =  (openClose,content) => {
    return{
        type: "OPEN_MODAL",
        payload: {
            openClose,
            content,
        }
    }
};

export default openAModal;
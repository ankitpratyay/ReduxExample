const initialState = {
    List: ["Ankit", "Mohan", "Pawan"]
}



const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_LIST":
            return {
                ...state,
                List: [...state.List, action.payload]
            }
            break;
        default:
            return state;
    }
}
export default listReducer;
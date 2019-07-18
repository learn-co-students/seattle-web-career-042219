const initialState = {
    title: "Davey"
}

const headerReducer = (state = initialState, action) => {
    console.log(state)
    console.log(action)
    switch(action.type) {
        case "UPDATE_TITLE": 
            const updatedTitle = state.title === "Davey" ? "ZIGGY" : "Davey"
            return {
                ...state,
                title: updatedTitle
            }
        default: 
            return state;
    }
}

export default headerReducer;
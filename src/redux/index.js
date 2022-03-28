const INITIAL_STATE = {
    userName: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_USERNAME':
            return{
                ...state,
                userName: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
import { ADD_DECK } from "../actions";

const reducer = (state={}, action) => {
    switch(action.type){
        case ADD_DECK:
            return {
                ...state,
                [action.payload.id] : {
                    ...action.payload
                }
            }
        default:
            return state
    }
}
export default reducer
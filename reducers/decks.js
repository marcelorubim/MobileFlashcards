import { ADD_DECK, FETCH_DECKS } from "../actions";

const reducer = (state={}, action) => {
    switch(action.type){
        case ADD_DECK:
            return {
                ...state,
                [action.payload.id] : {
                    ...action.payload
                }
            }
        case FETCH_DECKS: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}
export default reducer
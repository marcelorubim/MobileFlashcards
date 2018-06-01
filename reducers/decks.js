import { ADD_DECK, FETCH_DECKS, ADD_CARD } from "../actions";

const reducer = (state={}, action) => {
    switch(action.type){
        case ADD_DECK:
            return {
                ...state,
                [action.payload.title] : {
                    ...action.payload
                }
            }
        case ADD_CARD : {
            return {
                ...state,
                [action.title] : {
                    ...state[action.title],
                    questions: [
                        ...state[action.title].questions,
                        {
                            question: action.question,
                            answer: action.answer,
                        }
                    ]
                }
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
export const ADD_DECK = 'ADD_DECK'
export const FETCH_DECKS = 'FETCH_DECKS'
export const ADD_CARD = 'ADD_CARD'

export const addDeck = (deck) => ({
    type: ADD_DECK,
    payload: deck
})

export const addCard = (title, question, answer) => ({
    type: ADD_CARD,
    title,
    question,
    answer
})
export const ADD_DECK = 'ADD_DECK'
export const FETCH_DECKS = 'FETCH_DECKS'

export const addDeck = (deck) => ({
    type: ADD_DECK,
    payload: deck
})
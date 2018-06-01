import * as Storage from '../storage'

export const getDecks = () => (
    Storage.getItem(Storage.DECKS_KEY)
)

export const getDeck = (id) => (
    getDecks().then(result => JSON.parse(result)[id])
)

export const saveDeckTitle = (title) => (
    Storage.mergeItem(Storage.DECKS_KEY, {
        [title]: {
            title,
            questions:[]
        }
    })
)

export const addCardToDeck = (title, card) => (    
    getDeck(title).then(deck => (
        Storage.mergeItem(Storage.DECKS_KEY, {
            [title]: {
                title,
                questions:[
                    ...deck.questions,
                    card
                ]
            }
        })
    ))    
)
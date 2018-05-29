export const DECKS_KEY = 'MobileFlashCards:DecksList'
import { AsyncStorage } from 'react-native'

export function getItem(key){
    return AsyncStorage.getItem(key).then(result => {
        return result === null ? AsyncStorage.setItem(key,JSON.stringify({})) : result
    })
}

export async function setItem(key, item){
    return AsyncStorage.setItem(key,JSON.stringify(item))
}

export async function mergeItem(key, item){
    return AsyncStorage.mergeItem(key,JSON.stringify(item))
}
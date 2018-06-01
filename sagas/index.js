import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { ADD_DECK, FETCH_DECKS, ADD_CARD } from '../actions';
import * as storage from '../storage'
import { getDecks, saveDeckTitle, addCardToDeck } from '../api'

function* addDeck(action) {  
  try {
    yield call(saveDeckTitle, action.payload.title)
  } catch (e) {
    console.log(e)
  }
}
function* addCard({ title, question, answer }) {
  try {
    yield call(addCardToDeck,title,{ question, answer  })
  } catch (e) {
    console.log(e)
  } 
}
function* mySaga() {
  const decks  = yield call(getDecks)
  console.log(decks)
  yield put(
    {
      type:FETCH_DECKS,
      payload:JSON.parse(decks)
    })
  yield takeEvery(ADD_DECK, addDeck)
  yield takeEvery(ADD_CARD, addCard)
}

export default mySaga;

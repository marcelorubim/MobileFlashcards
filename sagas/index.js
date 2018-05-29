import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {ADD_DECK, FETCH_DECKS} from '../actions';
import * as storage from '../storage'

function * addDeck(action) {
  const decks = yield call(storage.getItem, storage.DECKS_KEY)
  console.log(decks)
  try {
    yield call(storage.mergeItem, storage.DECKS_KEY, {
      [action.payload.id]: {
        ...action.payload
      }
    })
  } catch (e) {
    console.log(e)
  }
}
function * mySaga() {
  const decks  = yield call(storage.getItem, storage.DECKS_KEY)
  console.log(decks)
  yield put(
    {
      type:FETCH_DECKS,
      payload:JSON.parse(decks)
    })
  yield takeEvery(ADD_DECK, addDeck);
}

export default mySaga;

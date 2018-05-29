import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './components/Tabs'
import AppStatusBar from './components/AppStatusBar'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(
    logger,
    sagaMiddleware
  )
)
sagaMiddleware.run(mySaga)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppStatusBar />
          <Tabs />
        </View>
      </Provider>
    );
  }
}

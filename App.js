import React from 'react';
import { View, Animated, Easing } from 'react-native';
import Tabs from './components/Tabs'
import AppStatusBar from './components/AppStatusBar'
import ViewDeck from './components/ViewDeck'
import ViewCard from './components/ViewCard'
import ViewScore from './components/ViewScore'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import { createStackNavigator } from 'react-navigation'
import AddCard from './components/AddCard';
import { dark, white } from './utils/colors'
import { setLocalNotification } from './utils/notification';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(
    logger,
    sagaMiddleware
  )
)
sagaMiddleware.run(mySaga)

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 250,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps

        const thisSceneIndex = scene.index
        const width = layout.initWidth

        const translateX = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [width, 0],
        })
  
        return { transform: [{ translateX }] }
      },
  }}

const Routes = createStackNavigator({
   Tabs: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => ({
      header:null,
    }),
  },
  ViewDeck: {
    screen: ViewDeck,
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      title:'Add Card',
      headerStyle: {
        backgroundColor: dark,
      },
      headerTintColor: white,
    }),
  },
  ViewCard: {
    screen: ViewCard,
    navigationOptions: ({ navigation }) => ({
      title:'Quiz',
      headerStyle: {
        backgroundColor: dark,
      },
      headerTintColor: white,
    })   
  },
  ViewScore: {
    screen: ViewScore,
    navigationOptions: ({ navigation }) => ({
      title:'Result',
      headerStyle: {
        backgroundColor: dark,
      },
      headerTintColor: white,
    }),
  }
}, {
  transitionConfig,
})


export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppStatusBar />
          <Routes />
        </View>
      </Provider>
    );
  }
}

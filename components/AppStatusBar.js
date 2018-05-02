import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'

const statusBar = () => (
    <View style={{height: Constants.statusBarHeight }}>
      <StatusBar />
    </View>
)
export default statusBar
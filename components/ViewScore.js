import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Rating, Button } from 'react-native-elements'
import { dark, primary } from '../utils/colors';
import { StackActions, NavigationActions } from 'react-navigation';
import { rescheduleLocalNotification } from '../utils/notification';


class ViewScore extends Component {
    componentDidMount(){
        rescheduleLocalNotification()
    }
    render() {
        const { deck, score } = this.props.navigation.state.params
        return (            
            <View style={styles.container}>
                <View style={styles.viewScore}>
                    <Text style={styles.scoreText}>This is your score in the deck {deck.title}</Text>                    
                    <Rating
                        imageSize={60}
                        readonly
                        startingValue={score}
                        ratingCount={deck.questions.length}
                        type='rocket'
                    />
                    <Text style={styles.scoreText}>{score}/{deck.questions.length}</Text>
                </View>
                <View  style={{flex:1, justifyContent: 'space-evenly'}}>
                    <Button
                            buttonStyle={{
                            backgroundColor: primary
                        }}
                            large
                            raised
                            onPress={() => {
                                const resetAction = StackActions.reset({
                                    index: 2,
                                    actions: [
                                    NavigationActions.navigate({ routeName: 'Tabs' }),
                                    NavigationActions.navigate({ routeName: 'ViewDeck', params: { deck } }),
                                    NavigationActions.navigate({ routeName: 'ViewCard', params: { deck, currIndex: 0 } })
                                    ],
                                });
                                this.props.navigation.dispatch(resetAction)
                            }}
                            title='Retry'/>
                    <Button
                            buttonStyle={{
                            backgroundColor: dark
                        }}
                            large
                            raised
                            onPress={() => {
                                const resetAction = StackActions.reset({
                                    index: 1,
                                    actions: [
                                    NavigationActions.navigate({ routeName: 'Tabs' }),
                                    NavigationActions.navigate({ routeName: 'ViewDeck', params: { deck } }),
                                    ],
                                });
                                this.props.navigation.dispatch(resetAction)
                            }}
                            title='Back to Deck'/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    viewScore: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff'
    },
    scoreText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default ViewScore
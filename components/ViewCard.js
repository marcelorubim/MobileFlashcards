import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { green, red, dark } from '../utils/colors'
import { Button } from 'react-native-elements'
import { StackActions, NavigationActions } from 'react-navigation';


  
class ViewCard extends Component { 
    state = {
        showAnswer: false
    }
    registerAnswer = (correct = false) => {
        const { deck, currIndex, score = 0 } = this.props.navigation.state.params
        if(currIndex === deck.questions.length -1){
            this.props.navigation.dispatch(StackActions.reset({
                index: 1,
                actions: [
                  NavigationActions.navigate({ routeName: 'Tabs' }),
                  NavigationActions.navigate({ routeName: 'ViewScore', params: { deck, score: correct ? score+1 : score } }),
                ],
            }))            
        }else{
            this.props.navigation.navigate(
                'ViewCard', 
                { 
                    deck, 
                    currIndex: currIndex+1, 
                    score: correct ? score+1 : score 
                })
        }
        
    }
    render() {
        const { deck, currIndex, score = 0 } = this.props.navigation.state.params
        const card = deck.questions[currIndex]
        return (
            <View style={styles.container}>
                <Text style={styles.question}>
                    {this.state.showAnswer ? card.answer : card.question}
                </Text>
                <View style={{flex:1, alignItems: 'center'}}>
                    <TouchableHighlight  onPress={() => this.setState(state => ({showAnswer:!state.showAnswer})) }>
                        <Text style={{textAlignVertical:'top', textAlign: 'center', fontWeight: 'bold', color: red}}>{this.state.showAnswer ? 'Question' : 'Answer'}</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex:2, justifyContent: 'space-evenly'}}>
                    <Button
                        buttonStyle={{
                        backgroundColor: green
                    }}
                        large
                        raised
                        onPress={() => this.registerAnswer(true)}
                        title='Correct'/>
                    <Button
                        buttonStyle={{
                        backgroundColor: red
                    }}
                        large
                        raised
                        onPress={() => this.registerAnswer(false)}
                        title='Incorrect'/>
                                        
                </View>
                <View style={{flex:1}}>
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
                        title='Back To Deck'/>
                </View>
                <Text style={{flex:1, textAlign: 'center', textAlignVertical: 'bottom'}}>
                    {currIndex+1}/{deck.questions.length}
                </Text>
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingTop: 40
    },
    question : {
        flex: 1,
        fontSize: 40,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})
export default ViewCard
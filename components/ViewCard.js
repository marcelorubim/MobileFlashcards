import React, {Component} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { green, red } from '../utils/colors'
import { Button } from 'react-native-elements'


class ViewCard extends Component {
    state = {
        currIndex: 0,
        correctAnswers: 0
    }
    registerAnswer = (correct) => {
        if(correct){
            this.setState(state => ({
                ...state,
                correctAnswers:state.correctAnswers+1
            }))    
        }
        this.setState(state => ({
            ...state,
            currIndex:state.currIndex+1
        }))
    }
    render() {
        const { deck } = this.props.navigation.state.params
        const card = deck.questions[this.state.currIndex]
        return (
            <View style={styles.container}>
                <Text>
                    {card.question}
                </Text>
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
                    onPress={this.registerAnswer}
                    title='Incorrect'/>
                <Text>
                    {this.state.currIndex+1}/{deck.questions.length}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly'
    }
})
export default ViewCard
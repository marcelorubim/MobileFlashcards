import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, StyleSheet } from 'react-native'
import TextInput from './ui/TextInput';
import { Button } from 'react-native-elements'
import {connect} from 'react-redux'
import { addCard } from '../actions'
import { primary } from '../utils/colors';


class AddCard extends Component {
    state = {
        question:'',
        answer: ''
    }
    setQuestion = (question) => {
        this.setState({
            question,
        })
    }
    setAnswer = (answer) => {
        this.setState({
            answer,
        })
    }
    submit = () => {
        const { answer, question } = this.state
        const { title } = this.props.navigation.state.params
        this.props.addCard(
            title,
            question,
            answer
        )
        this.props.navigation.goBack()
    }
    render(){
        return (
            <KeyboardAvoidingView style={styles.view}>
                <Text>Question</Text>
                <TextInput 
                    underlineColorAndroid='white'
                    onChangeText={(text) => this.setQuestion(text)}
                />
                <Text>Answer</Text>
                <TextInput 
                    underlineColorAndroid='white'
                    onChangeText={(text) => this.setAnswer(text)}
                />
                <Button 
                    raised 
                    large 
                    buttonStyle={{backgroundColor: primary}}
                    disabled={this.state.answer.length === 0 || this.state.question.length === 0}
                    onPress={this.submit} title='Submit' 
                />
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    view: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    }
})
const mapDispatchToProps = (dispatch) => ({
    addCard: (tiltle, question, answer) => dispatch(addCard(tiltle, question, answer))
})
export default connect(null, mapDispatchToProps)(AddCard)
import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Button} from 'react-native-elements'
import TextInput from './ui/TextInput';
import Label from './ui/Label';
import Container from './ui/Container'
import {connect} from 'react-redux'
import {addDeck} from '../actions'
import uuid from 'uuid'


class AddCard extends Component {
    state = {
        title: ''
    }
    setTitle = (title) => {
        this.setState(() => ({
            ...this.state,
            title
        }))
    }
    addDeck = (e) => {
        console.log('Add Deck')
        this
            .props
            .addDeck({
                id: uuid.v1(),
                cardsCount: 0,
                deleted: false,
                ...this.state
            })
    }
    render() {
        return (
            <Container>
                <Label>Deck's Title</Label>
                <TextInput
                    underlineColorAndroid='white'
                    onChangeText={(text) => this.setTitle(text)}/>
                <Button raised large onPress={this.addDeck} title='CREATE'/>
            </Container>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    addDeck: (deck) => dispatch(addDeck(deck))
})
export default connect(null, mapDispatchToProps)(AddCard)
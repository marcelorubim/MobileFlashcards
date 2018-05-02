import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Button from './ui/Button';
import TextInput from './ui/TextInput';
import Label from './ui/Label';
import Container from './ui/Container'
import { connect } from 'react-redux'
import { addDeck } from '../actions'



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
        this.props.addDeck({
            id: '1',
            cardsCount: 0,
            deleted: false,
            ...this.state,
        })
    }
    render() {
        return (
            <Container>
                <Label>Deck's Title</Label>
                <TextInput underlineColorAndroid='white' onChangeText={(text) => this.setTitle(text)}/>
                <Button onPress={this.addDeck} title='CREATE' />
            </Container>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    addDeck: (deck) => dispatch(addDeck(deck))
})
export default connect(null,mapDispatchToProps)(AddCard)
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import TextInput from './ui/TextInput';
import Label from './ui/Label';
import Container from './ui/Container'
import {connect} from 'react-redux'
import {addDeck} from '../actions'
import { black } from '../utils/colors'
import uuid from 'uuid'

class AddCard extends Component {
    state = {
        title: ''
    }
    setTitle = (title) => {
        this.setState(() => ({
            title
        }))
    }
    addDeck = (e) => {
        const { title } = this.state
        this
            .props
            .addDeck({
                title,
                questions: []
            })
        this.setState({
            title: ''
        })
        this.decksTitle.setNativeProps({ text: '' })

        this.props.navigation.navigate('DeckList')
    }
    render() {
        return (
            <Container style={styles.container}>
                <Label>Deck's Title</Label>
                <TextInput
                    underlineColorAndroid='white'
                    ref={element => {
                        this.decksTitle = element
                      }}
                    onChangeText={(text) => this.setTitle(text)}/>
                <Button buttonStyle={{backgroundColor:black}} raised large onPress={this.addDeck} title='Save Deck' />
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-evenly'
    }
})
const mapDispatchToProps = (dispatch) => ({
    addDeck: (deck) => dispatch(addDeck(deck))
})
export default connect(null, mapDispatchToProps)(AddCard)
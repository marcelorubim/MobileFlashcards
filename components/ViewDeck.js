import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { black } from '../utils/colors'


class ViewDeck extends Component {
    render() {
        console.log(this.props)
        const {deck} = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <View style={styles.view}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.questions}>{deck.questions.length} cards</Text>
                </View>
                <View style={styles.viewB}>
                    <Button containerStyle={styles.button} raised large onPress={this.addDeck} title='Add Card'/>
                    <Button containerStyle={styles.button} buttonStyle={{backgroundColor:black}} raised large onPress={this.addDeck} title='Start Quiz'/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    view: {
        flex: 1,
        justifyContent: 'center'
    },
    viewB: {
        flex: 1,
        justifyContent: 'space-evenly'
    },    
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    questions: {
        fontSize: 15,
        textAlign: 'center'
    },
    button: {
        marginTop: 10,
        marginBottom: 10
    }
})
export default ViewDeck
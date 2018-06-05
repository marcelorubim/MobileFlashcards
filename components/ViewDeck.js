import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { dark, white, black, primary } from '../utils/colors'
import { connect } from 'react-redux'


class ViewDeck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
          title: params ? params.deck.title : '',
            headerStyle: {
                backgroundColor: dark,
            },
            headerTintColor: white,
        };
      };
    render() {
        console.log(this.props)
        const { deck } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.view}>
                    <Text 
                        style={styles.title}>
                            {deck.title}
                    </Text>
                    <Text 
                        style={styles.questions}>
                            {deck.questions.length} cards
                    </Text>
                </View>
                <View style={styles.viewB}>
                    <Button 
                        buttonStyle={{
                            backgroundColor: primary
                        }}
                        containerStyle={styles.button} 
                        raised 
                        large
                        onPress={() => this.props.navigation.navigate('AddCard', { title: deck.title })} 
                        title='Create New Question'
                    />
                    {deck.questions.length > 0 &&
                        <Button 
                            buttonStyle={{
                                backgroundColor: dark
                            }}
                            containerStyle={styles.button} 
                            large 
                            onPress={() => this.props.navigation.navigate('ViewCard', { deck, currIndex: 0 })} 
                            title='Start Quiz'
                        />
                    }                    
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
        marginBottom: 10,
    }
})
const mapStateToProps = ({ decks }, { navigation }) => ({
    deck: decks[navigation.state.params.deck.title]
})
export default connect(mapStateToProps)(ViewDeck)
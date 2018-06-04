import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import DeckListItem from './DeckListItem';


class DeckList extends Component {
    render() {
        const {decks = []} = this.props
        if(decks.length === 0)
            return (
                <View style={styles.view}>
                    <Text style={styles.message}>Please, add a deck to start using this app. </Text>
                </View>
            )
        return (
            <ScrollView>
                {decks.map((d, i) => (<DeckListItem key={i} deck={d} navigation={this.props.navigation}/>))}
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    view: {
      flex: 1,      
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20
    },
    message: {
        fontWeight: 'bold',
        fontSize: 20
    }
})
const mapStateToProps = ({decks}) => ({
    decks: Object.values(decks)
})
export default connect(mapStateToProps)(DeckList)
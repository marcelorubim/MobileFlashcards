import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import DeckListItem from './DeckListItem';


class DeckList extends Component {
    render() {
        const {decks} = this.props
        return (
            <ScrollView>
                {decks && decks.map((d, i) => (<DeckListItem key={i} deck={d}/>))}
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    view: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
})
const mapStateToProps = ({decks}) => ({
    decks: Object.values(decks)
})
export default connect(mapStateToProps)(DeckList)
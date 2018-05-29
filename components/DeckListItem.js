import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components';

class DeckListItem extends Component {
    render(){
        const { deck } = this.props
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{deck.title}</Text>
                <Text style={styles.count}>{deck.cardsCount} count</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item: {
      flex: 1,
      justifyContent: 'space-around',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 40,
      paddingBottom: 40,
      borderColor: '#000',
      borderStyle: 'solid',
      borderWidth: 1
    },
    title: {
        fontSize: 20,
        justifyContent: 'center',
        flex: 4,
        alignItems: 'center',
        
    },
    count: {
        fontSize: 10,
        flex: 2,
        justifyContent: 'center',
    }
})
export default DeckListItem
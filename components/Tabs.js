import React, { Component } from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import DeckList from './DeckList'
import AddDeck from './AddDeck';

const Tabs = TabNavigator(
    {
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'Decks',                
            },
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions: {
                tabBarLabel: 'Add Deck',                
            },
        }
    },
    {
        tabBarPosition: 'bottom',
    }
)

export default Tabs
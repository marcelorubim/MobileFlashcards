import React, { Component } from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import DeckList from './DeckList'
import AddDeck from './AddDeck';
import { dark } from '../utils/colors'

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
        tabBarOptions: {
            style: {
                backgroundColor: dark,
              },
        }
    }
)

export default Tabs
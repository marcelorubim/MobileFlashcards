import React, { Component } from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import CardList from './CardList'
import AddCard from './AddCard';

const Tabs = TabNavigator(
    {
        CardList: {
            screen: CardList
        },
        AddCard: {
            screen: AddCard
        }
    },
    {
        tabBarPosition: 'bottom',
    }
)

export default Tabs
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MoneyCoach from '../components/moneyCoach'
import QCarousel from '../components/carousel'
import ChooseRiskProfile from '../components/riskProfile'
export default class Test extends Component {
    render() {
        console.log("Test page")
        return (
            <View>
                <ChooseRiskProfile />

            </View>
        )
    }
}

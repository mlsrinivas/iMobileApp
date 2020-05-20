import React, { Component } from 'react';
import { View, Text, Button, navigation } from 'react-native';
import { EquityDebt } from '../common'

export default class Header extends Component {
    render() {
        return (
            <View>
                <Text>header screen</Text>
                <EquityDebt equity={50} debt={80} />
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        this.props.navigation.navigate('Test')
                    }
                />
            </View>
        )
    }
}

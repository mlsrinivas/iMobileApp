import React, { Component } from 'react';
import { View, Text, Button,navigation } from 'react-native';

export default class Header extends Component  {
    render(){
        return(
            <View>
                <Text>header screen</Text>
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
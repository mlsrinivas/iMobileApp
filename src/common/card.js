import React from 'react'
import { View, StyleSheet } from 'react-native';
const Card = (props) => {
    const styles = {
        borderWidth: 1,
        borderRadius: props.borderRadius || 1,
        borderColor: props.borderColor || '#e9e9e9',
        padding: props.padding || 10,
        margin: 5,
        elevation: 2,
    }

    return (

        <View style={styles}>
            {props.children}
        </View>


    )
}

export default Card

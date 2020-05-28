import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
const Step = ({ step, entries }) => {
    var arr = Array.apply(null, { length: entries }).map(Number.call, Number);
    return (

        <View style={styles.steps}>
            <View style={styles.step}>
                <Text style={{ color: '#942720', fontSize: 17, fontWeight: 'bold' }}>{step}</Text>
            </View>
            <View style={styles.paginationContainer}>
                {
                    arr.map((entry) => {
                        return (
                            <View style={[styles.dot, step == entry + 1 && styles.activeDot]}></View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Step

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ProgressBar from 'react-native-progress/Bar'

const EquityBar = ({ equity, debt }) => {
    const progress = equity / (equity + debt);
    return (
        <View style={{ padding: 20, display: 'flex', width: "100%" }}>
            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 5 }}>
                <View style={{ alignItems: 'flex-start', flex: 1 }}><Text>Equity {equity}%</Text></View>
                <View style={{ alignItems: 'flex-end', flex: 1 }}><Text>Debt {debt}%</Text></View>
            </View>
            <ProgressBar
                progress={progress}
                width={null}
                height={10}
                color="#942720"
                unfilledColor="#f8c862"
                borderWidth={0}
                borderRadius={30}
            />
        </View>
    )
}
export default EquityBar

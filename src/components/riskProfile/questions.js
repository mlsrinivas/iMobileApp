import React from 'react';
import Grid from 'react-native-grid-component';
import { View, Text } from 'native-base'
import { RadioButton } from 'react-native-paper';
const Question = ({ data, onSelect }) => {
    const _renderItem = (item, index) => {
        return (
            <View key={index} style={{ display: "flex", marginTop: 20, paddingLeft: 10, paddingRight: 5, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                <RadioButton value={item} color="#942720" />
                <Text style={{ textAlign: 'left', color: "#a6a7a6", fontSize: 15 }}>{item}</Text>
            </View>
        )
    }
    return (
        <View style={{ justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', color: "#767975" }}>{data.question}</Text>
            <RadioButton.Group
                onValueChange={value => onSelect(value)}
                value={data.answer}

            >
                {
                    data.numColumns == 1 &&
                    <Grid
                        style={{ flex: 1 }}
                        renderItem={_renderItem}
                        data={data.options}
                        numColumns={1}
                    />

                }
                {
                    data.numColumns == 2 &&

                    <Grid
                        style={{ flex: 1 }}
                        renderItem={_renderItem}
                        data={data.options}
                        numColumns={2}
                    />
                }
            </RadioButton.Group>
        </View>
    )
}

export default Question

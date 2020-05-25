import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Checkbox } from 'react-native-paper';
const CheckBox = ({ onChange, label, isChecked }) => {



    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
                status={isChecked ? 'checked' : 'unchecked'}
                onPress={(e) => onChange(!isChecked)}
                color="#942720"
                label={label}
            />
            <Text>{label}</Text>
        </View>
    )
}

export default CheckBox;

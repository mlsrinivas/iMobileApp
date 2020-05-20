import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'

const CustomeButton = (props) => {
    return(
        <View style = {props.btnAlignment}>
        <TouchableOpacity style = {props.buttonStyle} onPress = {props.onPress}>
                <Text style = {props.textStyle}>{props.name}</Text>
        </TouchableOpacity>
        </View>
    )}

export default CustomeButton;
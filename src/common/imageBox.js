import { View, Text, Image } from 'react-native';
import React from 'react';
const ImageBox = ({ source, text, size = 40, color = "#e7e7ef", textColor = "#959595", flex = 1 }) => {
    return (
        <View style={{ flex: flex, justifyContent: 'center', alignItems: 'center', padding: 0 }}>
            <View style={{ padding: size / 2, backgroundColor: color, borderRadius: 50, margin: 1 }}>
                <Image source={source} style={{ width: size, height: size }} />
            </View>

            <Text style={{ color: textColor, fontSize: 13 }}>{text}</Text>
        </View>
    )
}
export default ImageBox

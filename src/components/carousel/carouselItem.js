import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Card, View, Text } from 'native-base';
import { ImageBox } from '../../common'
const CarouselItem = ({ item }) => {

    return (
        <Card style={{ borderRadius: 10 }}>



            <View style={{ display: 'flex', minHeight: 400, padding: 20, alignItems: 'center' }}>
                <View style={styles.labelView}>
                    <Text style={styles.label}>{item.label}</Text>
                </View>
                <ImageBox source={item.image} text="" flex={3} />
                <Text style={{ color: 'black' }}>{item.question}</Text>
                <View style={{ flex: 9 }}>
                    {
                        item.options.map((option, index) => {
                            const isAnswer = item.answer == option;
                            return (
                                <View key={index} style={{ marginTop: 10, marginBottom: 10 }}>
                                    <TouchableOpacity style={[styles.button, isAnswer && styles.active]}>
                                        <Text style={{ color: isAnswer ? "#942720" : '#c6c6c6' }}>{option}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })

                    }
                </View>
            </View>

        </Card>
    )
}
const styles = StyleSheet.create({
    label: {
        color: "white",
        textAlign: 'center',
        fontSize: 12
    },
    labelView: {
        position: 'absolute',
        // left: '40%',
        top: -17,
        backgroundColor: '#942720',
        // width: 200
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 1,
        paddingBottom: 1,
        marginBottom: 20,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    active: {
        borderColor: "#942720"
    },
    button: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#c6c6c6',
        padding: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 40
    }
})
export default CarouselItem

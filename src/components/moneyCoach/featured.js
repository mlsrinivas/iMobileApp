import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base'
import { ImageBox } from '../../common'
import styles from './styles'
const Featured = () => {
    return (
        <View style={[styles.box, { justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
            <View style={styles.featured}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>FEATURED</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={{ flex: 3 }}>
                    <ImageBox source={require('../../assets/money-pig.png')} text="" size={40} color="#ffe7e5" />
                </View>
                <View style={{ flex: 8, padding: 20 }}>
                    <View>
                        <Text style={{ fontSize: 20, color: "#505050" }}>Freedom SIP</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: "#c2c2c2" }}>Your ticket with financial freedom with assured income</Text>
                    </View>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', marginBottom: 10, marginTop: 20, alignItems: 'center' }}>
                        <Text style={{ color: '#7b302a', fontSize: 14 }}>Learn more </Text>
                        <Icon type="AntDesign" name="right" style={{ fontSize: 16, color: '#7b302a' }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon type="AntDesign" name="arrowright" style={{ fontSize: 16 }} />
                </View>
            </View>
        </View>
    )
}

export default Featured;

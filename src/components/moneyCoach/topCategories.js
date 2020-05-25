import React from 'react';
import { ImageBox } from '../../common';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles'
const TopCategories = () => {
    return (
        <View style={[styles.box, { justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
            <Text style={{ color: '#929392', fontSize: 16 }}>
                Top Categories For Investiments
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <ImageBox source={require('../../assets/money.png')} text="Top Rated Fund" size={40} color="#e7e7ef" />
                <ImageBox source={require('../../assets/cash.png')} text="Equity Funds" size={40} color="#fef6e4" />
                <ImageBox source={require('../../assets/rupee-bag.png')} text="Debt Funds" size={40} color="#b3e9f7" />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <ImageBox source={require('../../assets/money-pig.png')} text="Tax Saver Fund" size={40} color="#ffe7e5" />
                <ImageBox source={require('../../assets/rupee.png')} text="What's New" size={40} color="#c9fed6" />
                <ImageBox source={require('../../assets/insta-sip.png')} text="Insta SIP" size={40} color="#fef7e5" />
            </View>
        </View>
    )
}

export default TopCategories;

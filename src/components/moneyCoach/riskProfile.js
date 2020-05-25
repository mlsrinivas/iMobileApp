import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'native-base';
import { Button as CustomButton } from '../../common/styledComponents';
import { ImageBox } from '../../common'
const RiskProfile = (props) => {
    const [show, setShow] = useState(false);
    return (

        <View style={{ flexDirection: 'row', display: 'flex' }}>
            <View style={{ flex: 1 }}>
                <ImageBox source={require('../../assets/money-pig.png')} text={props.profile} size={40} color="#e7e7ef" textColor="#ab9fbf" />

            </View>
            <View style={{ flex: 2 }}>
                <View>
                    <Text style={{ color: '#9c9c9c' }}>You prefer modest return with minimal volatility</Text>
                </View>
                <TouchableOpacity
                    onPress={props.onShow}
                    style={{ display: 'flex', flexDirection: 'row', marginBottom: 10, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Text style={{ color: '#7b302a', fontSize: 14 }}>Learn more balance risk profile</Text>
                    <Icon type="AntDesign" name={props.showMore ? "up" : "down"} style={{ fontSize: 18, color: '#7b302a' }} />
                </TouchableOpacity>
                <View>
                    <CustomButton
                        onPress={props.onConfirm}
                        label="Confirm"
                    />
                </View>
            </View>
        </View>

    )
}

export default RiskProfile

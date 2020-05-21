import React, { Component } from 'react';
import { View, Text, Button, navigation, Alert } from 'react-native';
import { EquityDebt } from '../common'
import CustomeButton from './CustomeButton';
import TextInputField from './TextInputField';
import CustomeDatePicker from './CustomeDatePicker'
import { Dropdown } from 'react-native-material-dropdown';
import DropDownField from './DropDownField'

export default class Header extends Component {
    updateHandle = () => {
        this.props.navigation.navigate('Test')
    }
    constructor(){
        super();
        this.state = {
        }
    }
    render() {
        const data1 = [{ value: 'Item 1'}, { value: 'Item 2'}, { value: 'Item 3' }, { value: 'Item 4'}];

        return (
            <View>
                <Text>header screen</Text>
                <EquityDebt equity={50} debt={80} />
                
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        this.props.navigation.navigate('Test')
                    }
                />
                <CustomeButton
                    buttonStyle = {{height:50, width:100, backgroundColor:'red', borderRadius:25, alignItems:'center', justifyContent:'center'}}
                    textStyle = {{fontSize:20, color:'white'}}
                    btnAlignment = {{top:10, alignItems:'center'}}
                    name = 'MLS'
                    onPress = {this.updateHandle}
                />

                <TextInputField 
                    value = {this.props.value}
                    onChangeText = {this.props.onChangeText}
                    labelName = {'Amount'}
                />
                
                <View style = {{left:10}}><Text>jdsfkh</Text></View>
                <TextInputField 
                    value = {this.props.value}
                    onChangeText = {this.props.onChangeText}
                    labelName = {'Folio Number'}
                />

                <CustomeDatePicker 
                    fieldHeading = {'Select Your Start date'}
                    placeHolderName = {'Select date'}
                    passingDate = {this.state.date}
                />

                <DropDownField 
                    data = {data1}
                    labelName = {'Select item'}
                />
            </View>
        )
    }
}


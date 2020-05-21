import React from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const DropDownField = (props) => {
    return(
        <View style = {{top:50}}> 
            <Dropdown
                label={props.labelName}
                data={props.data}
                fontSize = {16}
                baseColor = {'gray'}
                containerStyle = {{width:'90%', left:'5%'}}
            />
        </View>
    )
}
export default DropDownField;
import React, { useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker'


const CustomeDatePicker = (props) => {
    const [date, setDate] = useState('2020-05-21');

    useEffect(() => {
        setDate(props.passingDate)
      }, [props.passingDate]);

    return(
        <View style = {{marginLeft:'5%', top:20}}>
                <Text style = {{color:'gray'}}>{props.fieldHeading}</Text>

                <DatePicker
                    style={{width: '95%'}}
                    date={date}
                    mode="date"
                    placeholder={props.placeHolderName}
                    format="DD-MM-YYYY"
                    minDate="01-05-1999"
                    maxDate="01-06-2024"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        left: 10,
                        height:0,
                        width:0
                    },
                    dateInput: {
                        borderWidth:0,
                        borderBottomWidth:1,
                        borderBottomColor:'gray',
                        alignItems:'flex-start',
                    }
                    }}
                    onDateChange={(date) => {setDate(date)}}
                />
            </View>
    )
}

export default CustomeDatePicker;
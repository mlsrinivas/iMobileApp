import React, { useState, Component } from 'react'
import { View } from 'react-native';
import {  TextInput } from 'react-native-paper'

// const TextInputField = () => {
//     const [text,setText] = useState('');
//     return(
//         <View style = {{left:20, margin: 0 ,paddingVertical: 0}}>
//                 <TextInput 
//                     label='Email'
//                     value={text}
//                     onChangeText={text => setText( text )}
//                     style = {{color:'orange', fontSize:20, width:'80%', top:100,paddingHorizontal:0, backgroundColor: 'transparent',
//                     paddingHorizontal: 5,paddingVertical: 0,
//                     marginTop: 0,
//                     marginBottom: 0,}}
//                     theme={{colors: {primary: 'gray', underlineColor: 'transparent'}}}
                    
//                 />
//                 </View>
//     )
// }

// export default TextInputField;

export default class TextInputField extends Component{
    constructor(props){
        super(props);
        this.state = {
            text:''
        };
    }
    render(){
        return(
            <View style = {{left:10, margin: 0 ,paddingVertical: 0}}>
            <TextInput 
                label={this.props.labelName}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                style = {{color:'orange', fontSize:20, width:'80%', paddingHorizontal:0, backgroundColor: 'transparent',
                paddingHorizontal: 5,paddingVertical: 0,
                marginTop: 0,
                marginBottom: 0,}}
                theme={{colors: {primary: 'gray', underlineColor: 'transparent'}}}
                
            />
            </View>

        )
    }
}
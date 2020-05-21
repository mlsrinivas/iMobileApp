import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native';

const StyledButton = styled.View(props => ({
    borderWidth: 1,
    borderRadius: props.borderRadius || 5,
    borderColor: props.borderColor || '#942720',
    padding: props.padding || 10,
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props.backgroundColor || 'transparent'
}));

const StyledText = styled.Text(props => ({
    color: props.color || '#942720',
    fontSize: props.fontSize || 16,
    fontWeight: props.fontWeight || 'normal'
}))

const Button = ({ buttonStyle = {}, labelStyle = {}, label = "Button", fill, onPress }) => {
    const backgroundColor = fill ? buttonStyle.borderColor ? buttonStyle.borderColor : '#942720' : buttonStyle.backgroundColor ? buttonStyle.backgroundColor : 'transparent';
    const color = fill ? labelStyle.color ? backgroundColor == labelStyle.color ? '#fff' : backgroundColor : '#fff' : '#942720'
    console.log(backgroundColor, color)
    return (
        <TouchableOpacity onPress={onPress}>
            <StyledButton {...buttonStyle} backgroundColor={backgroundColor}>
                <StyledText {...labelStyle} color={color}>{label}</StyledText>
            </StyledButton>
        </TouchableOpacity>

    )
}
export default Button

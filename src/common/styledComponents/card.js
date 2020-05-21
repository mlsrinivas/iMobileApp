import React from 'react'
import styled from 'styled-components/native'

const Card = styled.View(props => ({
    borderWidth: 1,
    borderRadius: props.borderRadius || 4,
    borderColor: props.borderColor || '#e9e9e9',
    padding: props.padding || 10,
    margin: 5,

    boxShadow: '5px 10px 10px black'


}));

export default Card

import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components';

const StyledButton = styled.TouchableOpacity`
    background-color: blue;
    border-radius: 2;
    padding-top: 10;
    padding-bottom: 10;
    padding-left: 10;
    padding-right: 10;
`;
const StyledText = styled.Text`
    color: white;
    text-align: center;
    font-size: 20;
    font-weight: bold;
`

class Button extends Component {
    render(){
        return(
        <StyledButton {...this.props}>
            <StyledText>{this.props.title}</StyledText>
        </StyledButton>
        )
    }
}

export default Button
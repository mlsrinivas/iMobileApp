import React from 'react'
import styled from 'styled-components/native'
import { TouchableHighlight, View, Text } from 'react-native';

const StyledView = styled.View(props => ({
    borderWidth: 1,
    borderRadius: props.borderRadius || 5,
    borderColor: props.borderColor || '#999b99',

    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
}));

const Tab = styled.TouchableHighlight(props => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: props.last ? 0 : 1,
    paddingTop: props.padding || 10,
    paddingBottom: props.padding || 10,
    backgroundColor: props.isActive ? "#942720" : 'transparent'
}))

const ButtonTab = ({ tabs, activeTab, onSelect, fontSize }) => {
    return (
        <StyledView>
            {
                tabs.map((tab, index) => {

                    return (

                        <Tab
                            key={index}
                            last={index == tabs.length - 1}
                            isActive={activeTab == 0 ? index == 0 ? true : false : activeTab == tab.id}
                            onPress={() => onSelect(tab.id)}
                        >
                            <Text style={{ fontSize: fontSize || 15 - 0.8 * tabs.length }}>{tab.name}</Text>
                        </Tab>

                    )
                })
            }
        </StyledView>
    )
}

export default ButtonTab

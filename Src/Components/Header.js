import React, { Component } from 'react';
import { View, Text, Button, navigation } from 'react-native';
import { EquityBar, ConfirmModal, CheckBox } from '../common'

import { Card, Button as CustomButton, ButtonTab } from '../common/styledComponents'
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            activeTab: 0,
            isChecked: false
        }
    }
    callback = (value) => {
        console.log(value)
        this.setState({ visible: false })
    }
    close = () => {
        this.setState({ visible: false })
    }
    onSelectTab = (tab) => {
        this.setState({ activeTab: tab })
    }
    onChange = (value) => {
        this.setState({ isChecked: value })
    }
    render() {
        const tabs = [
            { id: 1, name: "Risk Average" },
            { id: 2, name: "Conservative" },
            { id: 3, name: "Balanced" },
            { id: 4, name: "Growth" },
            { id: 5, name: "Aggresive" }];
        return (
            <View>
                <Text>header screen</Text>
                <EquityBar equity={50} debt={80} />
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        this.setState({ visible: true })
                    }
                />
                <ConfirmModal
                    visible={this.state.visible}
                    callback={this.callback}
                    close={this.close}
                    title="Sell Confirmation"
                    text="Are you sure you want to sell Rs 1000 of HDFC balanced adv plan Dividend payout Option"

                />
                <Card><Text>Hello</Text></Card>
                <CustomButton
                    fill
                    onPress={() => console.log("button pressed ")}
                    label="Button"
                />
                <ButtonTab
                    tabs={tabs}
                    activeTab={this.state.activeTab}
                    onSelect={this.onSelectTab}

                />
                <CheckBox
                    label="Hello"
                    isChecked={this.state.isChecked}
                    onChange={this.onChange}
                />
            </View>
        )
    }
}

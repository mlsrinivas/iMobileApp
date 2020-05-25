import React, { Component } from 'react'
import { View, Text, ScrollView, AppState, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Card, Icon } from 'native-base'
import { Button as CustomButton, ButtonTab } from '../../common/styledComponents'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RiskProfile from './riskProfile'
import TopCategories from './topCategories'
import Featured from './featured';
import InvestButton from './investButton'
import LearnMore from './learnMore'
import styles from './styles'

export default class MoneyCoach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 3,
            showLernMore: false,
            profileUpdated: true
        }
    }
    onSelectTab = (tab) => {
        console.log(tab)
        this.setState({ activeTab: tab })
    }
    _confirm = () => {
        this.setState({ profileUpdated: true })
    }
    _showLernMore = () => {
        this.setState({ showLernMore: !this.state.showLernMore })
    }
    render() {
        const tabs = [
            { id: 1, name: "Risk Average" },
            { id: 2, name: "Conservative" },
            { id: 3, name: "Balanced" },
            { id: 4, name: "Growth" },
            { id: 5, name: "Aggresive" }];
        return (
            <ScrollView>
                <View style={{ padding: 10 }}>
                    <Card style={{ borderRadius: 5 }}>
                        <View style={styles.box}>
                            {
                                !this.state.profileUpdated &&
                                <>
                                    <View>
                                        <Text style={{ textAlign: 'center', color: '#949594', fontSize: wp('4.0%') }}>Your Risk profile help us recommend funds that are better suited got your growth</Text>
                                    </View>

                                    <View style={[styles.flexBox, { marginTop: hp('4%') }]}>
                                        <Text style={{ textAlign: 'center', color: '#9f9f9f', fontSize: wp('3%') }}>CHOOSE YOUR RISK PROFILE</Text>
                                        <ButtonTab
                                            tabs={tabs}
                                            fontSize={wp('2.8%')}
                                            activeTab={this.state.activeTab}
                                            onSelect={this.onSelectTab}

                                        />
                                    </View>
                                </>
                            }
                            <View style={[styles.flexBox]}>
                                {
                                    !this.state.profileUpdated ?
                                        <RiskProfile
                                            profile={tabs[this.state.activeTab - 1].name}
                                            onConfirm={this._confirm}
                                            onShow={this._showLernMore}
                                            showMore={this.state.showLernMore}
                                        />
                                        :
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                            <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                                <Text>
                                                    Your Risk Profile :
                                            </Text>
                                                <Text style={{ color: '#ae2831' }}>
                                                    {tabs[this.state.activeTab - 1].name}
                                                </Text>
                                            </View>
                                            <View tyle={{ flex: 3, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                                                <TouchableOpacity
                                                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                                                    onPress={() => this.setState({ showLernMore: !this.state.showLernMore })}>
                                                    <Text style={{ color: '#ae2831' }}>{this.state.showLernMore ? "Colapse" : "Learn More"}</Text>
                                                    <Icon type="AntDesign" name={this.state.showLernMore ? "up" : "down"} style={{ fontSize: 18, color: '#7b302a' }} />
                                                </TouchableOpacity>

                                            </View>
                                        </View>
                                }

                            </View>
                            {
                                this.state.showLernMore &&
                                <LearnMore debt={3000} equity={2000} isConfirmed={this.state.profileUpdated} />
                            }

                        </View>

                    </Card>
                    <Card style={{ borderRadius: 5 }}>
                        <TopCategories />
                    </Card>
                    <Card style={{ borderRadius: 5 }}>
                        <Featured />
                    </Card>
                    <View style={{ padding: 20, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <InvestButton />
                    </View>

                </View>
            </ScrollView>
        )
    }
}


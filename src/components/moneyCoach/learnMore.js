import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Icon } from 'native-base';
import ProgressCircle from 'react-native-progress-circle'
import styles from './styles'
const LearnMore = ({ debt, equity, isConfirmed = true }) => {

    const total = debt + equity;
    const deptP = (debt * 100) / total;
    const equityP = (equity * 100) / total

    return (
        <View style={[styles.flexBox, { marginTop: 20, padding: 10 }]}>
            <Text style={{ color: '#9c9c9c' }}>
                You are looking for moderate capital growth over a longer term,cautious towards taking high levels of risk.
                however, comfortable with short term fuctions in returns. You are willing to invest in Equity Mutual Funds and alternative investments like Real Estate, Private Equity etc
            </Text>
            <View style={{ padding: 20, marginTop: 40, marginBottom: 10 }}>
                <ProgressCircle
                    percent={deptP}
                    radius={90}
                    borderWidth={20}
                    color="#f79e28"
                    shadowColor="#ae2831"
                    bgColor="#fff"

                >
                    <View style={styles.flexBox}>
                        <Text style={{ color: '#f79e28' }}>Debt - {deptP}%</Text>
                        <Text style={{ color: "#ae2831" }}>Equity - {equityP}%</Text>
                    </View>

                </ProgressCircle>
            </View>
            {
                isConfirmed &&
                <TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon type="FontAwesome" name="edit" style={{ color: "#ae2831", fontSize: 20, marginRight: 5 }} />
                        <Text style={{ color: "#ae2831" }}>
                            Update my Risk Profile
                    </Text>
                    </View>

                </TouchableOpacity>
            }
        </View>
    )
}

export default LearnMore

import React from 'react'
import { View, Text, Card } from 'native-base'
import { TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import styles from './styles'
import { colors } from '../../common'
import Step from './steps'
import Question from './questions'
const { width, height } = Dimensions.get('window')
export default class ChooseRiskProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,

            data: [
                {
                    question: "Which of the following statements best describes your investment philosophy and risk tolerance?",
                    options: [
                        "I want my investments to be completely sale with no risk to capital",
                        "I want to preserve my capital but I am willing to accept minor short term volatility in anticipation of slightly returns",
                        "I want my investments to grow in value and I can accept moderate negative returns over slighly longer periods",
                        "I want my investments to earn highest possible returns. I can accept negative returns for longer duration including possible loss of principle"
                    ],
                    numColumns: 1,
                    answer: ""
                },
                {
                    question: "The following tables shows the worst and best one year return of five hypothetical investment plans over 15 years. Based on the range of possible outcomes shown, which profile would you be most comfortable investing in?",
                    options: [
                        "Profile A \nWorst:2%\nBest:6%",
                        "Profile A \nWorst:3%\nBest:8%",
                        "Profile B \nWorst:-3%\nBest:14%",
                        "Profile B \nWorst:-2%\nBest:16%",
                        "Profile C \nWorst:-12%\nBest:26%",
                    ],
                    numColumns: 2,
                    answer: ""
                }, {
                    question: "Assume that an equity you had bought, based on the recommendation of your financial advisor, has fallen by 25% and there is no change in fundamentals of the company. If your circumstances and your convication about the investment have not changed. would you",
                    options: [
                        "Sell 100%",
                        "Sell 50%",
                        "Hold",
                        "Increse\nHolding"
                    ],
                    numColumns: 2,
                    answer: ""
                }, {
                    question: "When making an investment, risk and return usually go hand in hand. Long-term investors, who are looking for higher appreciation, can tolerate fluctuations in their varied investment in the near-to-medium term. If you are a long-term investor, the maximum loss that you are prepared to accept on your investments in any one year period is:",
                    options: [
                        "0%",
                        "-5%",
                        "-10%",
                        "-18%",
                        "-25% or more"
                    ],
                    numColumns: 2,
                    answer: ""
                },
                {
                    question: "What does your current investment holdings comprise ?",
                    options: [
                        "Mainly Cash/Bank deposites with a \nsmall portion invested in low risk bonds",
                        "Mainly debt market investments and \nsome portion in blue chip stockes",
                        "A mix of debt instuments, blue chip and aggressive stocks",
                        "Mostly speculative and high risk investiments",
                    ],
                    numColumns: 1,
                    answer: ""
                }
            ]
        }
    }
    onSelectAnswer = (answer) => {
        let data = this.state.data;
        let question = data[this.state.step - 1];
        question["answer"] = answer;
        data[this.state.step - 1] = question;
        this.setState({ data })
        console.log(data)
    }
    onNext = () => {
        const data = this.state.data;
        let step = this.state.step;
        if (data[step - 1].answer != "") {
            step += 1;
            if (this.state.data.length >= step)
                this.setState({ step })
            else {
                console.log("sumbit")
            }
        }
        else {
            console.log("select answer")
        }
    }
    render() {
        const data = this.state.data[this.state.step - 1]
        console.log(width, height)
        return (

            <View style={{ display: 'flex', alignItems: 'center', height: '100%' }}>

                <View style={styles.header}>
                    <Text style={{ color: "#dadada" }}>Choose your risk profile</Text>
                </View>
                {/* <ScrollView style={{ paddingLeft: 10, minHeight: 350, paddingRight: 10 }}> */}
                <View style={{ paddingLeft: 10, maxHeight: height - 240, paddingRight: 10 }}>
                    <Step step={this.state.step} entries={this.state.data.length} />
                    <Card style={{ padding: 10, minHeight: 300, alignItems: 'center', borderRadius: 5, zIndex: 5 }}>
                        <Question data={data} onSelect={this.onSelectAnswer} />
                    </Card>
                </View>
                {/* </ScrollView> */}
                <View style={styles.bottomButton}>
                    <TouchableOpacity onPress={this.onNext}>
                        <Text style={{ color: colors.white }}>{this.state.step < this.state.data.length ? "Next" : "Submit"}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

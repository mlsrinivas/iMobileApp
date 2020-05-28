import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselItem from './carouselItem';
import { Button } from 'native-base';

const { width, height } = Dimensions.get('window');
const entries = [
    {
        question: "What is Your total income before taxes ?",
        image: require('../../assets/money.png'),
        label: "30 seconds to go",
        options: ["Less than 10 Lakhs", "10 Lakhs - 25 Lakhs", "More than 25 Lakhs"],
        answer: "10 Lakhs - 25 Lakhs"
    },
    {
        question: "What percentage of your income do you generally save ? ",
        image: require('../../assets/money-pig.png'),
        label: "It'll only take 25 seconds",
        options: ["Less than 10%", "10% - 25%", "More than 25%"],
        answer: ""
    },
    {
        question: "What would you do if your portfolio GAINED 10% in a few weeks ?",
        image: require('../../assets/graph.png'),
        label: "Just a few questions more",
        options: ["Sell & Book profit", "Do Nothing", "Buy More"],
        answer: ""
    },
    {
        question: "Inorder to achieve expected returns. You are willing to bear pricipal loss of?",
        image: require('../../assets/umbrella.png'),
        label: "You are almost done",
        options: ["Less than 0%", "0% - 25%", "More than 25%"],
        answer: ""
    },
    {
        question: "What is your age ?",
        image: require('../../assets/boy.png'),
        label: "And thats the last one",
        options: ["18-40 years", "41-45 years", "46-54 years", "More than 54 years"],
        answer: ""
    }
]
const labels = ["30 seconds to go", "It'll only take 25 seconds", "Just a few questions more", "You are almost done", "And thats the last one"]
const sliderWidth = 350;
const itemWidth = 320;
export default class QCarousel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0
        }
    }
    _renderItem = ({ item, index }) => {

        return (
            <CarouselItem item={item} />
        );
    }

    render() {

        console.log("Carsoul is loading", this.state.activeSlide)
        return (
            <View style={{ height: height }}>
                <View style={{ padding: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ marginBottom: 25 }}>
                        <Text>Those questions will help us recommended the best portfolio profile</Text>
                    </View>


                    <Carousel
                        layout={'tinder'}
                        ref={(c) => { this._carousel = c; }}
                        data={entries}
                        renderItem={this._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        containerCustomStyle={styles.slider}
                        contentContainerCustomStyle={styles.sliderContentContainer}
                        loop={true}
                        onSnapToItem={(index) => this.setState({ activeSlide: index })}
                    />
                    <Pagination
                        dotsLength={entries.length}
                        activeDotIndex={this.state.activeSlide}
                        containerStyle={styles.paginationContainer}
                        dotColor={'#942720'}
                        dotStyle={styles.paginationDot}
                        inactiveDotColor={"white"}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={1}
                    // carouselRef={this._carousel}
                    // tappableDots={!!this._carousel}
                    />

                </View>
                <View style={{ position: 'absolute', bottom: 25, width: width }}>
                    <Button full style={{ backgroundColor: "#942720" }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>Submit</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    label: {
        color: "white",
        textAlign: 'center'
    },
    labelView: {
        position: 'absolute',
        // left: '40%',
        top: 0,
        backgroundColor: '#942720',
        // width: 200
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 3,
        paddingBottom: 2,
        marginBottom: 20,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    title: {
        // paddingHorizontal: 30,
        // backgroundColor: 'transparent',
        // color: 'rgba(255, 255, 255, 0.9)',
        // fontSize: 20,
        // fontWeight: 'bold',
        // textAlign: 'center',
        color: 'black'
    },
    titleDark: {
        color: 'black'
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        display: 'flex',

        // padding: 20,
        // height: 300

    },
    sliderContentContainer: {
        paddingVertical: 15, // for custom animation
        justifyContent: 'center',
        alignItems: 'center'
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 20,
        borderColor: '#c5c5c5',
        borderWidth: 1
        // marginHorizontal: 8
    }
})

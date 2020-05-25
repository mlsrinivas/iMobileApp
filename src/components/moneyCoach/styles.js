import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    flexBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        paddingTop: 20
    },
    featured: {
        position: 'absolute',
        top: 0,
        right: 30,
        backgroundColor: '#942720',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 4,
        paddingTop: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    }
})

export default styles

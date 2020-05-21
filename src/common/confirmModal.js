import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
const ConfirmModal = ({ visible, callback, close, title, text, buttonText }) => {
    return (
        <Portal>
            <Modal visible={visible} onDismiss={close}>
                <View style={styles.modal}>
                    <View style={[styles.header, styles.block]}>
                        <Text style={[styles.whiteText, styles.bold]}>{title}</Text>
                    </View>
                    <View style={[styles.block, styles.body]}>
                        <Text style={styles.bold}>{text}</Text>
                    </View>
                    <View style={[styles.block, styles.footer]}>
                        <TouchableOpacity onPress={callback}>
                            <Text style={[styles.whiteText, styles.bold]}>{buttonText || "Confirm"}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </Portal>
    )
}
const styles = StyleSheet.create({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,

        borderRadius: 10,
        width: '80%',
        marginLeft: '10%'
    },
    header: {
        backgroundColor: '#303531',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    body: {
        backgroundColor: '#ffffff',
    },
    footer: {
        backgroundColor: '#942720',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    block: {

        width: "100%",
        padding: 20,

        justifyContent: 'center',
        alignItems: 'center'
    },
    whiteText: {
        color: 'white'
    },
    bold: {

        fontSize: 19
    }
})

export default ConfirmModal

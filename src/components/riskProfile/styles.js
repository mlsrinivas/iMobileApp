import { StyleSheet } from 'react-native';
import { colors } from '../../common'
import { color } from 'react-native-reanimated';
const styles = StyleSheet.create({
    bottomButton: {
        backgroundColor: colors.brown,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        overflow: "scroll"
    },
    steps: {
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    step: {
        borderWidth: 1.7,
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // padding: 30,
        borderColor: colors.brown,
        borderRadius: 50
    },
    paginationContainer: {
        width: 200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        marginTop: 20
    },
    activeDot: {
        backgroundColor: colors.brown
    },
    dot: {
        borderColor: colors.brown,
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 25
    },
    header: {
        height: 60,
        backgroundColor: colors.gray1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;

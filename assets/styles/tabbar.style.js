import { ScaledSheet } from 'react-native-size-matters';
/* get width, height */

export default style = ScaledSheet.create({
    footer: {
        position: 'absolute',
        flex: 1,
        left: '0@ms',
        right: '0@ms',
        bottom: '0@ms',
        backgroundColor: '#34c4cb',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    footerMenu: {
        height:58,
        flex: 1,
        backgroundColor: '#34c4cb',
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomButtons: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: '-2@ms',
        flex: 1,
    },
    footerText: {
        color: 'white',
        alignItems: 'center',
        fontSize:'14@ms',
        fontFamily: 'Quicksand-Bold'
    },
    paddingPort:{
        flex: 1,
    }
})
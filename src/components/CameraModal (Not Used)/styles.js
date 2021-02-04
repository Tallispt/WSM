import { StyleSheet } from 'react-native';

import { metrics, fonts, colors, general } from '../../styles/index.js';

const styles = StyleSheet.create({

    arrowIcon: {
        color: colors.dark,
        opacity: 1,
    },

    modalContainer: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 20
    },

    modalButtonsContainer: {
        flexDirection: 'row',
    },

    modalImage: {
        width: '100%', 
        height: 500,
        borderRadius: 10
    },

});

export default styles;
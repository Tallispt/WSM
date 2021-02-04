import { StyleSheet } from 'react-native';

import { metrics, fonts, colors, general } from '../../styles/index.js';

const styles = StyleSheet.create({

    dataContainer: {
        padding: 5,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10,
        padding: metrics.baseMargin,

    },

    dataTitle: {
        fontSize: fonts.big,
        fontWeight: '500',
        paddingBottom: 7,


    },

    dataDate: {
        fontSize: fonts.small,

    },

    dataDescription: {
        fontSize: fonts.small,

    },

    dataImage: {

    }

});

export default styles;
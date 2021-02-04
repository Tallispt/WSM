import { StyleSheet } from 'react-native';

import { metrics, fonts, colors, general } from '../../styles/index.js';

const styles = StyleSheet.create({
    container: {
        height: metrics.navBarHeight,
        paddingTop: metrics.doubleBaseMargin,
        paddingHorizontal: metrics.doubleBaseMargin,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderColor: colors.ligher,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

    title: {
        fontSize: fonts.bigger,
        color: colors.primary,
        fontWeight: 'bold',
    },

    icon: {
        color: colors.primary,
        paddingRight: metrics.smallMargin,
    },

    modals: {
        height: metrics.screenHeight,
        paddingTop: metrics.doubleBaseMargin,
        paddingHorizontal: metrics.doubleBaseMargin,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderColor: colors.ligher,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
});

export default styles;
import { StyleSheet } from 'react-native';

import { metrics, fonts, colors, general } from '../../styles/index.js';

const styles = StyleSheet.create({
    container: {
        height: metrics.navBarHeight+metrics.statusBarHeight*2,
        paddingTop: metrics.doubleBaseMargin,
        paddingBottom: 10,
        paddingHorizontal: metrics.doubleBaseMargin,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderColor: colors.ligher,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        
        // shadowColor: colors.regular,
        // shadowRadius: 2,
        // shadowOpacity: 90,
        // shadowOffset: { width: 0, height:0},
        // elevation: -2,
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
    
});

export default styles;
import { StyleSheet } from 'react-native';

import { metrics, fonts, colors, general } from '../../styles/index.js';

const styles = StyleSheet.create({

    tabContainer: {

    },

    cameraContainer: {
        width: 52,
        height: 52, 
        borderRadius: 26,
        marginTop: 12,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",

    },

    cameraIcon: {
        color: colors.white,
        shadowColor: colors.dark,
        shadowRadius: 2,
        shadowOpacity: 90,
        shadowOffset: { width: 0, height: 0},
        elevation: -2,


    },

    icon: {

    },
    
});

export default styles;
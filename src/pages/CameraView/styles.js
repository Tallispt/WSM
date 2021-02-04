import { StyleSheet } from 'react-native';

import { metrics, fonts, colors, general } from '../../styles/index.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerContainer: {
        height: metrics.navBarHeight+metrics.statusBarHeight*2,
        backgroundColor: colors.darker,
        opacity: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: metrics.doubleBaseMargin*2,
        paddingBottom: metrics.doubleBaseMargin,
        // shadowColor: colors.regular,
        // shadowRadius: 2,
        // shadowOpacity: 90,
        // shadowOffset: { width: 0, height:0},
        // elevation: -2,
    },

    headerCamIcon: {
        color: colors.ligher,
    },

    arrowIcon: {
        color: colors.darker,
    },

    camera: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },

    cameraButton: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    
    cameraIcon: {
        color: colors.white,
    },

    containerTab: {
        backgroundColor: colors.darker,
        height: 100,
        opacity: 0.9,
        paddingHorizontal: metrics.doubleBaseMargin*2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // shadowColor: colors.regular,
        // shadowRadius: 2,
        // shadowOpacity: 90,
        // shadowOffset: { width: 0, height:0},
        // elevation: -2,

    },

    cameraIconTab: {
        color: colors.white,
        shadowColor: colors.ligh,
        shadowRadius: 2,
        shadowOpacity: 90,
        shadowOffset: { width: 0, height: 0},
        elevation: -2,
        position: 'absolute',

    },

    innerCameraIconTab: {
        color: colors.darker,
        position: 'absolute',

    },

    iconTab: {
        color: colors.white,
    },

    modalButtonsContainer: {    
        height: metrics.navBarHeight+metrics.statusBarHeight*2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: metrics.doubleBaseMargin*2,
        paddingBottom: metrics.baseMargin,
        borderBottomWidth:1,
        borderBottomColor: colors.ligher
        
        
    },

    modalImageContainer: {
        margin: 20,
        marginTop: 45,
        shadowColor: colors.regular,
        shadowRadius: 2,
        shadowOpacity: 90,
        shadowOffset: { width: 0, height:0},
        elevation: -2,
        justifyContent: 'center',
        
        
    },

    modalImage: {
        width: '100%', 
        height: 500,
        borderRadius: 10,
        padding: 20,
        
    },

    modalResultsButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        backgroundColor: colors.primary,
        padding: 20,
        marginHorizontal: 80,
        shadowColor: colors.regular,
        shadowRadius: 2,
        shadowOpacity: 90,
        shadowOffset: { width: 0, height:0},
        elevation: -2,


    },

    modalText: {
        fontWeight: '400',
        fontSize: 24,
        color: colors.white,

    },

});

export default styles;
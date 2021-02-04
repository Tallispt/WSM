import { StyleSheet, Dimensions } from 'react-native';

import { metrics, fonts, colors, general } from '../../styles/index.js';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      },
    
    box: {
      margin: metrics.doubleBaseMargin,
      backgroundColor: colors.primary,
      width: metrics.screenWidth-metrics.doubleBaseMargin*2,
      borderRadius: 30,
      shadowColor: colors.regular,
      shadowRadius: 2,
      shadowOpacity: 90,
      shadowOffset: { width: 0, height:0},
      elevation: -2,

    },

    boxTitle: {
      paddingHorizontal: metrics.doubleBaseMargin*(7/5),
      paddingTop: metrics.doubleBaseMargin*(7/5),
      fontSize: fonts.bigger,
      color: colors.white,
      fontWeight: 'bold',
      

    },
    
    boxInfo: {
      padding: metrics.doubleBaseMargin,

    },

    boxInfoText: {
      fontSize: fonts.big,
      color: colors.white,

    },

    boxImage: {
      paddingTop: 40,
      alignSelf: 'center',
      borderRadius: 10,
      width: 200,
      height:200,

    },


    paginationDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 3,
    },

    paginationDotContainer: {
      position: "absolute",
      bottom: 5,
      flexDirection: "row",
    },

    modal: {
      position: 'absolute',
      zIndex: 100,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
  },

  modalContainer: {
      height: 300,
      marginVertical: 10,
      marginHorizontal: 20,
  },

  modalTitle: {
    fontSize: fonts.bigger,
    fontWeight: '500',
    color: colors.regular,
    alignSelf: 'center',
    marginBottom: 20,

  },

  modalMiniContainers: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },

  modalText: {
    fontSize: fonts.big,
    marginRight: 5,
  },

  modalSwitch: {
    // position: 'absolute',
    // left: 55,

  }

});

export default styles;
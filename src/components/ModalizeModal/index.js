import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

import styles from './style.js';


function ModalizeModal({modalizeRef}){

  return (

      <Modalize 
      ref={modalizeRef}
      snapPoint={180}
      >            
        <View style={styles.modals}>
            <Text>Modal</Text>
        </View>
    </Modalize>

  );
};

export default ModalizeModal;

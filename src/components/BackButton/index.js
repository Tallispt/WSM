import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import styles from './style.js';

function BackButton() {
    const navigation = useNavigation();
  
    return (
      <TouchableOpacity  onPress={() =>{navigation.goBack()}}>
        <Icon name="chevron-left" style={styles.headerCamIcon} size={24}/>
      </TouchableOpacity>
    );
  }
  
  export default BackButton;
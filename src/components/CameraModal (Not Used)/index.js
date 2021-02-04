import React from 'react';
import { View, TouchableOpacity, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from './styles';

const CameraModal = ({ style, children, type }) => (
    <Modal
    animationType="slide"
    transparent={false}
    visible={open}
    >
      <View style={ styles.modalContainer }>
        <View style={ styles.modalButtonsContainer }>
       
         <TouchableOpacity style={{ margin: 10 }} onPress={ ()=> setOpen(false)}>
         <Icon name="chevron-left" style={styles.arrowIcon} size={24}/>
         </TouchableOpacity>
         <TouchableOpacity style={{ margin: 10 }} onPress={ ()=> savePic()}>
         <Icon name="upload" style={styles.arrowIcon} size={24}/>
         </TouchableOpacity>

       </View>

       <Image
       style={ styles.modalImage }
       source={{ uri: capturedPic }}
       />
      </View>
    </Modal>
  );
  
  export default CameraModal;
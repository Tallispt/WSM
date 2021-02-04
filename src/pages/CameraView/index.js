import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import BackButton from '../../components/BackButton/index';
import Torch from 'react-native-torch';

import styles from './styles';
import { colors } from '../../styles';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

function CameraView(){

  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [torchOn, setTorchOn] = useState(false);
  const [flashOn, setFlashOn] = useState(Camera.Constants.FlashMode.off);
  const [iconName, setIconName] = useState("ios-flash-off");
  const [iconNameTorch, setIconNameTorch] = useState("flashlight");
  const [binary, setBinary] = useState(null);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

  (async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    setHasPermission(status === 'granted');
  })();
  (async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  })();

}, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera.</Text>;
  }

  async function snap(){
    if(cameraRef){
      const data = await cameraRef.current.takePictureAsync({ 
        base64: true,
      });
      setImage(data.uri);
      setOpen(true);
      setBinary((data.base64));
    }
  };

 async function savePic(){
   const asset = await MediaLibrary.createAssetAsync(image)
   .then(() => {
     alert('Photo saved!')

   })
   .catch(error => {
     console.log('err', error)

   })
 };

  const handlePress = () => {
    Torch.switchState(torchOn);
    setTorchOn(torchOn === false ? true : false);
    console.log(" ");
    console.log(torchOn);
  };

  async function pickImage(){
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4 , 3],
      quality: 1,
      base64: true,
    })
    if (!result.cancelled) {
      setImage(result.uri);
      setOpen(true);
      setBinary((result.base64));
    }
    
  };

  const CameraHeader = () => (
    <View style={styles.headerContainer}>

      <BackButton/>

      <TouchableOpacity  
        onPress={() => {
          setIconNameTorch(
            iconNameTorch === "flashlight"
            ? "flashlight-off"
            : "flashlight"
          );
          handlePress
        }}
        >
          <MaterialCommunityIcons name={iconNameTorch} size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity  
      onPress={() => {
        setFlashOn( 
          flashOn === Camera.Constants.FlashMode.off
          ? Camera.Constants.FlashMode.on
          : Camera.Constants.FlashMode.off
          );
          setIconName(
            iconName === "ios-flash-off"
            ? "ios-flash"
            :"ios-flash-off"
          );
        }}>
          <Ionicons name={iconName} style={styles.headerCamIcon} size={24} />
      </TouchableOpacity>

    </View>
  );

  const CameraTab = () => (
    <View style={styles.containerTab}>
        <TouchableOpacity
        onPress={()=>pickImage()}>
          <FontAwesome name="picture-o" size={24} style={styles.iconTab} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center', justifyContent: 'center'}}  
          onPress={() => {snap()} }>
            <Icon name="circle" size={80} style={styles.cameraIconTab} />
            <Icon name="circle-thin" size={70} style={styles.innerCameraIconTab}/>
        </TouchableOpacity>

        <TouchableOpacity         
        onPress={() => { 
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Icon name="refresh" size={24} style={styles.iconTab} />
        </TouchableOpacity>
    </View>
  );

  return (
    <View style={ styles.container }>
      <FocusAwareStatusBar barStyle={'light-content'}/>
      <Camera 
        ref={cameraRef}  
        style={{ flex: 1 }} 
        type={type}
        flashMode={flashOn}
      >

      <CameraHeader/>
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image 
          style={{height:200, width:200, opacity: 0.2}}
          source={require('../../../assets/Vector.png')}
        />
      </View>

      <CameraTab />

      </Camera>

      { image &&

        <Modal
        animationType="slide"
        transparent={false}
        visible={open}
        presentationStyle={'overFullSheet'}
        >
          <FocusAwareStatusBar barStyle={'dark-content'}/>
          <View style={{backgroundColor:colors.background, flex:1}}>
            <View style={ styles.modalButtonsContainer }>
            
              <TouchableOpacity style={{ margin: 10 }} onPress={ ()=> setOpen(false)}>
                <Icon name="chevron-left" style={styles.arrowIcon} size={24}/>
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 10 }} onPress={ ()=> savePic()}>
                <FontAwesome5 name="file-download" style={styles.arrowIcon} size={24}/>
              </TouchableOpacity>
    
            </View>
            <View style={styles.modalImageContainer}>
            <Image
              style={ styles.modalImage }
              source={{ uri: image }}
              />
            </View>

            <TouchableOpacity 
            style={styles.modalResultsButton}
            onPress={()=>{}}>
              <Text style={styles.modalText}>Results</Text>
            </TouchableOpacity>
            </View>


        </Modal>
      }

    </View>


  );
}
  
export default CameraView;
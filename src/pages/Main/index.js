import React, { useState, useRef }  from 'react';

import { View, Text, Image, StatusBar, Animated, TouchableOpacity, Switch } from 'react-native';
import {ScalingDot} from "react-native-animated-pagination-dots";
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

import styles from './styles';
import colors from '../../styles/colors'

import Header from './../../components/Header/index.js';
import { FlatList } from 'react-native-gesture-handler';
import { metrics } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const InfoBox = [
  {
    id: '1',
    title: "Welcome!",
  },
  {
    id: '2',
    title: "Overview",
  },
  {
    id: '3',
    title: "How to use",
  },
  {
    id: '4',
    title: "Exemples",
  },
  {
    id: '5',
    title: "More about",
  },
]

const Box = ({title, text}) => {
  return(            
  <View style={styles.box}>
    <Text style={styles.boxTitle}>{title}</Text>
    <View style={styles.boxInfo}>
      <Text style={styles.boxInfoText}>{text}</Text>
    </View>
  </View>
);
}

function Main() {

  const scrollX = React.useRef(new Animated.Value(0)).current;

   const renderBox = ({ item }) => (
    <Box title={item.title}/>
  );

    const navigation = useNavigation();

  const modalizeRef = useRef(null);

  function onOpen(){
    modalizeRef.current?.open();
  };

  useEffect(() => {
    navigation.setParams({
      modalizeRef
    })
  }, []);

  const [isRGB, setIsRGB] = useState(false);
  const [isCMYK, setIsCMYK] = useState(false);
  const [isHSV, setIsHSV] = useState(false);
  const [isHist, setIsHist] = useState(false);
  const toggleSwitchRGB = () => setIsRGB(previousState => !previousState);
  const toggleSwitchCMYK = () => setIsCMYK(previousState => !previousState);
  const toggleSwitchHSV = () => setIsHSV(previousState => !previousState);
  const toggleSwitchHist = () => setIsHist(previousState => !previousState);



  return(
    <View style={ styles.container }>
      <StatusBar barStyle={'dark-content'}/>
      <Header />

        {/* <BoxInfo text="With WS Metrix you are able to detect precisely what's on your drinkeble water." />
        <Image style={styles.boxImage} source={require('./../../images/image1.png')} /> */}

      <FlatList
        data={ InfoBox }
        renderItem={renderBox}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={metrics.screenWidth}
        snapToAlignment={'center'}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
      />

      <ScalingDot
        data={InfoBox}
        scrollX={scrollX}
        activeDotScale={1.4}
        inActiveDotColor={colors.regular}
        activeDotColor={colors.primary}
        inActiveDotOpacity={0.3}
        dotStyle={styles.paginationDot}
        containerStyle={styles.paginationDotContainer}
      />

    <Portal>
      <Modalize 
      ref={modalizeRef}
      snapPoint={300}
      
      >            
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Settings</Text>
            <View style={styles.modalMiniContainers}>
              <Text style={styles.modalText}>RGB</Text>
              <Switch 
              trackColor={{  true: colors.primary }}
              onValueChange={toggleSwitchRGB}
              value={isRGB}
              style={styles.modalSwitch}
              />
            </View>
            <View style={styles.modalMiniContainers}>
              <Text style={styles.modalText}>CMYK</Text>
              <Switch 
              trackColor={{  true: colors.primary }}
              onValueChange={toggleSwitchCMYK}
              value={isCMYK}
              style={styles.modalSwitch}
              />
            </View>
            <View style={styles.modalMiniContainers}>
              <Text style={styles.modalText}>HSV</Text>
              <Switch 
              trackColor={{  true: colors.primary }}
              onValueChange={toggleSwitchHSV}
              value={isHSV}
              style={styles.modalSwitch}
              />
            </View>
            <View style={styles.modalMiniContainers}>
              <Text style={styles.modalText}>Show histogram</Text>
              <Switch 
              trackColor={{  true: colors.primary }}
              onValueChange={toggleSwitchHist}
              value={isHist}
              style={styles.modalSwitch}
              />
            </View>
        </View>
      </Modalize>
    </Portal>

    </View>
  );
}

export default Main;
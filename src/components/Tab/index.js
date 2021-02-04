import React, {useState, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../styles';

import Main from './../../pages/Main/index.js'
import CameraView from './../../pages/CameraView/index.js'
import Data from './../../pages/Data/index.js'


const Tab = createBottomTabNavigator();

function MyTabs() {

    return (
        <Tab.Navigator
          initialRouteName="Main"
          tabBarOptions={{
            activeTintColor: colors.primary,
            showLabel: false,
          }}
        >
          <Tab.Screen
            name="Main"
            component={Main}
            options={{ 
              tabBarIcon: ({ color, size}) => (
                <Icon name="clone" color={color} size={size} style={{marginTop:12}} />
              ),
            }}
          />

          <Tab.Screen
          name="CameraView"
          component={CameraView}
          options={{ 
            tabBarIcon: ({ color, size }) => (
            <View style={styles.cameraContainer}>
              <Icon name="camera" style={styles.cameraIcon} size={size} />
            </View>
            ),
            tabBarVisible: false,
            unmountOnBlur: true,
          }}
          />

          <Tab.Screen
            name="Data"
            component={Data}
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Icon name="bar-chart" color={color} size={size} style={{marginTop:12}}/>
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default MyTabs;
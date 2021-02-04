import React from 'react';

import { View, Text, StatusBar, FlatList } from 'react-native';

import styles from './styles';

import { createStackNavigator } from '@react-navigation/stack';

import AllData from './data.js';

const Stack = createStackNavigator();

function StackData() {

  const dataBox = ({ item }) => (
    <View style={styles.dataContainer}>
        <Text style={styles.dataTitle}>{item.title}</Text>
        <Text style={styles.dataDate}>{item.date}</Text>
        <Text style={styles.dataDescription}>{item.description}</Text>
    </View>
    
  );

 return(
    <View>
      <StatusBar barStyle={'dark-content'}/>
      <FlatList
      data={ AllData }
      renderItem={dataBox}
      keyExtractor={item => item.id}
      style={{height:900}}
      >

      </FlatList>
    </View>
  );
 }

function Data() {

  return (
      <Stack.Navigator>
        <Stack.Screen
        name='Data'
        component={StackData}
        options={{}}
        />
      </Stack.Navigator>
  );
}

  export default Data;
  
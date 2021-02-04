import React from 'react';

import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

function Settings({ setModalVisible }) {

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.title}> WS Metrix</Text>
                <TouchableOpacity 
                onPress={()=>setModalVisible(false)}>
                    <Icon name="ios-more" size={24} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.modals}>
                <Text>Modal</Text>
            </View>
        </SafeAreaView>
    );
};

export default Settings;
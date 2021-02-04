import React, { useRef } from 'react';

import { View, Text, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Modalize } from 'react-native-modalize';

import styles from './styles';
// import Settings from '../SettingsModal/index'
import { useRoute } from '@react-navigation/native';
import { useCallback } from 'react';

function Header(){

    const route = useRoute();

    const onOpen = useCallback(() => route.params.modalizeRef?.current?.open(), [route]);

    return (
        <View style={styles.container}>

            <Text style={styles.title}> WS Metrix</Text>
            <TouchableOpacity 
            onPress={onOpen}>
                <Feather name="more-horizontal" size={24} style={styles.icon} />
            </TouchableOpacity>

        </View>
    );
};

export default Header;
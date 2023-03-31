import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image,View, Text,Pressable} from 'react-native';
import styles from '../component/style';

export default function Page1({navigation}) {
    return (
          <View style={styles.container}>
            <Image style={styles.banner}
              source = {require('../img/onboard1.png')}
            />
            <Text style={styles.headerTitle}>
              WELCOME TO PACEPAL 
            </Text>
            <Text style={styles.subTitle} >
              Suggest runners within a 1km radius around you
            </Text>
            <StatusBar style="auto" />
            <Pressable  
              onPress={() =>navigation.navigate('Onboard-2')}
              style={styles.btn_orange}
            >
              <Text style={styles.textInbutton} >GET START</Text>
            </Pressable>
          </View>       
    );
};



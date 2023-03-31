import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image,View, Text,Pressable} from 'react-native';
import styles from '../component/style';
//
export default function Page2({navigation}) {
    return (
      
    <View style={styles.container}>
        <Image style={styles.banner} source = {require('../img/onboard2.png')}/>
        <View style={styles.slide_point}>
          <Image 
            style={{position : 'absolute',left:0}}
            source = {require('../img/rect_avtived.png')} 
          />
          <Image 
            style={{position : 'absolute',left:'42%'}}
            source = {require('../img/rect_no_active.png')} 
          />
          <Image 
            style={{position : 'absolute',right:'0%'}}
            source = {require('../img/rect_no_active.png')} 
          />
        </View>
        <Text style={styles.headerTitle}>FIND WALKING BUDDY</Text>
        <Text style={styles.subTitle}>Help you find friends who share the same running goals</Text>
        <StatusBar style="auto" />
        <Image style={styles.backIcon}
          onPress={() =>navigation.navigate('Onboard-1')}
          source = {require('../img/Back.png')} 
        />
        <Pressable 
          style={styles.btn_orange}
          onPress={() =>navigation.navigate('Onboard-3')}
        >
          <Text style={styles.textInbutton} >NEXT</Text>
        </Pressable>
      </View>
    );
};
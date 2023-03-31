import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image,View, Text,StyleSheet,Pressable} from 'react-native';
import styles from '../component/style';

//

export default function Page4({navigation}) {
    return (
      
    <View style={styles.container}>
       <Image style={styles.banner} source = {require('../img/onboard4.png')}/>
       <View style={styles.slide_point}>
          <Image 
            style={{position : 'absolute',left:0}}
            source = {require('../img/rect_no_active.png')} 
          />
          <Image 
            style={{position : 'absolute',left:'42%'}}
            source = {require('../img/rect_no_active.png')} 
          />
           <Image 
            style={{position : 'absolute',right:'0%'}}
            source = {require('../img/rect_avtived.png')} 
          />
        </View>
        <Text style={styles.headerTitle}>CREATE A HEALTHY COMMUNITY</Text>
        <Text style={styles.subTitle}>Make the community more active and healthy</Text>
        <StatusBar style="auto" />
        <Pressable 
          style={styles.btn_login}
          onPress={() =>navigation.navigate('Onboard-1')}
        ><Text style={styles.textInbutton}>Log in</Text></Pressable>
        <Pressable 
          style={styles.btn_signin}
          
        ><Text style={styles.textInbutton}>Sign in</Text></Pressable>
      </View>
    );
};


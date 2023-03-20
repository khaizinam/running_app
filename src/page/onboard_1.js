import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import img1 from '../img/onboard1.png'; 
import Page2 from './onboard_2'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Page1({navigation}) {
    return (
          <View style={styles.container}>
            <Text
              style={styles.headerTitle}
            >
              WELCOME to PacePal 
            </Text>
            <Text
              style={styles.subTitle}
            >
              Suggest runners within a 1km radius around you
            </Text>
            <img style={styles.banner}
              src={img1} 
              alt="banner" 
            />
            <StatusBar style="auto" />
            <button 
              onClick={() =>
                navigation.navigate('Onboard-2')
              }
              style={styles.btn_orange}
            >GET START</button>
          </View>       
    );
};
const styles = StyleSheet.create({
  container: {
      position : 'relative',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  btn_orange :{
      position: 'absolute',
      width : '212px',
      height:'74px',
      border : 'none',
      backgroundColor : '#F9762D',
      color : 'white',
      fontSize: '18px',
      fontWeight :'bold',
      left: windowWidth / 2 - 212/2 + 'px',
      bottom : '60px'
  },
  banner:{
    position: 'absolute',
    width: windowWidth - 50 + 'px',
    left: '25px',
    top: '10px'
  }
  ,headerTitle:{
    position: 'absolute',
    width : windowWidth - 50 +'px',
    /* Heading_Onboarding */
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '30px',
    lineHeight: '41px',
    textAlign: 'center',
    bottom: '300px',
    color: "#000000"
  },
  subTitle:{
    position: 'absolute',
    width : windowWidth - 140 +'px',
    /* Heading_Onboarding */
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '27px',
    textAlign: 'center',
    bottom: '193px',
    color: "#000000"
  },
});


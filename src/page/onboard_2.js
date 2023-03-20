import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import img1 from '../img/onboard2.png';
import backIcon from '../img/Back.png'

//
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Page2() {
    return (
      
    <View style={styles.container}>
        <Text
          style={styles.headerTitle}
        >
          FIND WALKING BUDDY
        </Text>
        <Text
          style={styles.subTitle}
        >
          Help you find friends who share the same running goals
        </Text>
        <img style={styles.banner}
          src={img1} 
          alt="banner" 
        />
        <StatusBar style="auto" />
        <img style={styles.backIcon}
          src={backIcon} 
          alt="backIcon" 
        />
        <button 
          style={styles.btn_orange}
          
        >NEXT</button>
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
      width : '167px',
      height:'58px',
      border : 'none',
      backgroundColor : '#F9762D',
      color : 'white',
      fontSize: '18px',
      fontWeight :'bold',
      left: windowWidth / 2 - 167/2 + 'px',
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
  backIcon:{ 
    position: 'absolute',
    width: '58px',
    height: '58px',
    right: windowWidth/2 + 58 + 50+'px',
    bottom: '60px'
  }
});


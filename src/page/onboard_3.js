import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import img1 from '../img/onboard3.png';
import backIcon from '../img/Back.png'
import icon_1 from '../img/rect_avtived.png'
import icon_2 from '../img/rect_no_active.png'

//
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Page3({navigation}) {
    return (
      
    <View style={styles.container}>
        <div style={styles.slide_point}>
          <img 
            style={{position : 'absolute',left:'0px'}}
            src={icon_2} 
            alt="icon_2" 
          />
          <img 
            style={{position : 'absolute',left:'42%'}}
            src={icon_1} 
            alt="icon_1" 
          />
          <img 
            style={{position : 'absolute',right:'0%'}}
            src={icon_2} 
            alt="icon_2" 
          />
        </div>
        <Text
          style={styles.headerTitle}
        >
          IMPROVE HEALTHY
        </Text>
        <Text
          style={styles.subTitle}
        >
          Running improves your health significantly and effectively
        </Text>
        <img style={styles.banner}
          src={img1} 
          alt="banner" 
        />
        <StatusBar style="auto" />
        <img style={styles.backIcon}
          src={backIcon} 
          alt="backIcon" 
          onClick={() =>
            navigation.navigate('Onboard-2')
          }
        />
        <button 
          style={styles.btn_orange}
          onClick={() =>
            navigation.navigate('Onboard-4')
          }
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
  },
  slide_point :{
    position: 'absolute',
    width: '59px',
    height: '9px',
    left: windowWidth/2 - 59/2+'px',
    top: '641px',
  }
});


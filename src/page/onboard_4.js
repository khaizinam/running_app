import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import img1 from '../img/onboard4.png';
import backIcon from '../img/Back.png'
import icon_1 from '../img/rect_avtived.png'
import icon_2 from '../img/rect_no_active.png'

//
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Page2() {
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
            src={icon_2} 
            alt="icon_2" 
          />
          <img 
            style={{position : 'absolute',right:'0%'}}
            src={icon_1} 
            alt="icon_1" 
          />
        </div>
        <Text
          style={styles.headerTitle}
        >
          CREATE A HEALTHY COMMUNITY
        </Text>
        <Text
          style={styles.subTitle}
        >
          Make the community more active and healthy
        </Text>
        <img style={styles.banner}
          src={img1} 
          alt="banner" 
        />
        <StatusBar style="auto" />
        <button 
          style={styles.btn_orange}
          
        >Log in</button>
        <button 
          style={styles.btn_white}
          
        >Sign up</button>
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
      borderRadius: '6px',
      left: windowWidth / 2 - 167 - 20  + 'px',
      bottom : '60px'
  },
  btn_white :{
    position: 'absolute',
    width : '167px',
    height:'58px',
    border : 'none',
    backgroundColor : '#FFFFFF',
    color : '#0B0531',
    fontSize: '18px',
    fontWeight :'bold',
    left: windowWidth / 2 + 20 + 'px',
    border: '2px solid #0B0531',
    borderRadius: '6px',
    bottom : '60px'
},
  banner:{
    position: 'absolute',
    width: windowWidth - 50 + 'px',
    left: '25px',
    top: '80px'
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


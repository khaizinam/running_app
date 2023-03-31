import {Dimensions,StyleSheet} from 'react-native';
//
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        position : 'relative',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_orange :{
        position: 'absolute',
        width : 212,
        height: 74,
        border : 'none',
        backgroundColor : '#F9762D',
        left: windowWidth / 2 - 212/2,
        bottom : 60,
        borderRadius:30
    },
    textInbutton:{
      color : 'white',
      fontSize: 18,
      fontWeight :'bold',
      marginTop: 74/2 -10,
      textAlign:'center',
    },
    banner:{
      position: 'absolute',
      width: windowWidth - 50,
      left: 25,
      top: 10
    }
    ,headerTitle:{
      position: 'absolute',
      width : windowWidth - 50,
      /* Heading_Onboarding */
      // fontFamily:  'Roboto, Helvetica, sans-serif',
      fontStyle: 'normal',
      fontWeight: 800,
      fontSize: 30,
      textAlign: 'center',
      bottom: 250,
      color: "#000000"
    },
    subTitle:{
      position: 'absolute',
      width : windowWidth - 140,
      /* Heading_Onboarding */
      // fontFamily: 'Nunito',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 20,
      textAlign: 'center',
      bottom: 193,
      color: "#000000"
},
backIcon:{ 
    position: 'absolute',
    width: 58,
    height: 58,
    right: windowWidth/2 + 58 + 50,
    bottom: 60
},
slide_point :{
    position: 'absolute',
    width: 59,
    height: 9,
    left: windowWidth/2 - 59/2,
    bottom: 350,
  },
  btn_login :{
    position: 'absolute',
    border : 'none',
    backgroundColor : '#F9762D',
    borderRadius:30,
    position: 'absolute',
    width : 167,
    height:74,
    left: windowWidth / 2 - 167 - 20,
    bottom : 60
  },
  btn_signin :{
    position: 'absolute',
    border : 'none',
    backgroundColor : '#F9762D',
    borderRadius:30,
    position: 'absolute',
    width : 167,
    height:74,
    left: windowWidth / 2 + 20,
    bottom : 60
},
  });
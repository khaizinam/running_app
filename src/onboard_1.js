import { StatusBar } from 'expo-status-bar';
import {
  React,
  useState 
} from 'react';
import {
  Image,
  View, 
  Text,
  Pressable,
  TouchableOpacity
} from 'react-native';
import styles from '../component/style';

export default function Page1({navigation}) {
  const img_banner = '../assets/img/onboard1.png';
  headerTitle =  'WELCOME TO PACEPAL';
  subTitle = 'Suggest runners within a 1km radius around you'
  btn_text = 'GET START'
  const [myText, setMyText] = useState('GET START');
  const navigator=(navigation)=>{
    navigation.navigate('Onboard-2')
    // if (myText=='GET START'){ setMyText('clicked')}
    // else setMyText('GET START')
    // setMyText('NEXT')
  }
    return (
          <View style={styles.container}>
            <StatusBar style="auto" />
            <Image style={styles.banner}
              source = {require(img_banner)}
            />
            <Text style={styles.headerTitle}>
              {headerTitle}
            </Text>
            <Text style={styles.subTitle} >
              {subTitle}
            </Text>
            <TouchableOpacity 
              activeOpacity={0.5} 
              onPress={() =>navigator(navigation)}
              style={styles.btn_orange}
            >
              <Text style={styles.textInbutton} >{myText}</Text>
            </TouchableOpacity>
          </View>       
    );
};



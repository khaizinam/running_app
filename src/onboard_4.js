import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Image,
  View, 
  Text,
  Pressable,
  TouchableOpacity
} from 'react-native';
import styles from '../component/style';

//

export default function Page4({navigation}) {
    return (
      
    <View style={styles.container}>
       <Image style={styles.banner} source = {require('../assets/img/onboard4.png')}/>
       
       <View style={styles.slide_point}>
          <Image 
            style={{position : 'absolute',left:0}}
            source = {require('../assets/img/rect_no_active.png')} 
          />
          <Image 
            style={{position : 'absolute',left:'42%'}}
            source = {require('../assets/img/rect_no_active.png')} 
          />
          <Image 
            style={{position : 'absolute',right:'0%'}}
            source = {require('../assets/img/rect_avtived.png')} 
          />
        </View>

        <Text style={styles.headerTitle}>CREATE A HEALTHY COMMUNITY</Text>

        <Text style={styles.subTitle}>Make the community more active and healthy</Text>

        <StatusBar style="auto" />

        <TouchableOpacity 
          activeOpacity={0.5}  
          style={styles.btn_login}
          onPress={() =>navigation.navigate('Onboard-1')}
        >
          <Text style={styles.textInbutton}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity={0.5} 
          style={styles.btn_signin} 
        >
          <Text style={styles.textInbutton}>Sign in</Text>
        </TouchableOpacity>

      </View>
    );
};


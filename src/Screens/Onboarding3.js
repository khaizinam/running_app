import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
const { width, height } = Dimensions.get("screen");
export default Onboarding3 = function ({ navigation }) {

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/on3.jpg")} style={styles.logo} />
      <Text style={styles.title}>Cập nhật thông báo</Text>
      <Text style={styles.subtest}>
      Nhận thông báo xe đến trạm, trạng thái xe và thêm nhiều tính năng khác
      </Text>
      <View style={styles.bottom}>
      <ImageBackground source={require("../assets/images/bot_on2.jpg")} style={styles.bot_img}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <Image source={require("../assets/images/but_on1.jpg")} style={styles.circle_img}/>
        </TouchableOpacity>
      </ImageBackground>
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#284C83",
    justifyContent: "flex-end",

  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginVertical: 20,
    marginTop: 15,
  },
  logo: {
    marginTop: 20,
    width: 0.9*width,
    height: 0.3*height,
    marginBottom: 50,
    borderRadius: 40,
  },
  bottom:{
    
  },
  circle_img:{
    borderRadius: 300,
    justifyContent:'center',
    width: 0.2*width,
    height: 0.2*width,
    marginLeft:0.05*width, 
    marginBottom:0.009*height,
  },
  bot_img:{
    width: 1*width,
    height: 0.16*height,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  bottom:{
    justifyContent: 'flex-end',
    marginTop:height*0.1,
  },
  subtest: {
    color:'#fff',
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 30,
    marginBottom: 30,
    marginTop: 10,
    lineHeight:30,
    fontWeight: "600",
  },
  button1: {
    marginTop: 70,
    backgroundColor: "#F47229",
    padding: 10,
    width: 181.28,
    height: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 49,
    gap: 10,
  },
 
  buttonText1: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
 
});

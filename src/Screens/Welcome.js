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
} from "react-native";
const { width, height } = Dimensions.get("screen");
export default Welcome = function ({ navigation }) {

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/welcome.jpg")} style={styles.logo} />
      <Text style={styles.title}>Xin chào !</Text>
      <Text style={styles.subtest}>
      Hãy sẵn sàng để di chuyển khắp nơi trong thành phố của bạn
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Onboarding1")}
        style={styles.button1}
      >
        <Text style={styles.buttonText1}>Bắt đầu</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#284C83",
    justifyContent: "center",
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

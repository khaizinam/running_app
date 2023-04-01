import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "../component/style";
//
export default function Page2({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.banner}>
        <Image source={require("./img/onboard2.png")}/>
      </View>
  
      <View style={styles.title_wrap}>
        <View style={styles.slide_point}>
          <Image
            style={{ position: "absolute", left: 0 }}
            source={require("./img/rect_avtived.png")}
          />
          <Image
            style={{ position: "absolute", left: "42%" }}
            source={require("./img/rect_no_active.png")}
          />
          <Image
            style={{ position: "absolute", right: "0%" }}
            source={require("./img/rect_no_active.png")}
          />
        </View>
        <Text style={styles.headerTitle}>FIND WALKING BUDDY</Text>
        <Text style={styles.subTitle}>Help you find friends who share the same running goals</Text>
      </View>
      <View style={styles.groups_btn}>
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btn_orange}
            onPress={() => navigation.navigate("Onboard-1")}
          >
            <Text style={styles.textInbutton}>PREVIOUS</Text>
          </TouchableOpacity>
        </View>
        <View> 
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btn_orange}
            onPress={() => navigation.navigate("Onboard-3")}
          >
            <Text style={styles.textInbutton}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

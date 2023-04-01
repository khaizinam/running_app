import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "../component/style";
//
export default function Page2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.banner}
        source={require("../assets/img/onboard2.png")}
      />
      <View style={styles.title_wrap}>
        <View style={styles.slide_point}>
          <Image
            style={{ position: "absolute", left: 0 }}
            source={require("../assets/img/rect_avtived.png")}
          />
          <Image
            style={{ position: "absolute", left: "42%" }}
            source={require("../assets/img/rect_no_active.png")}
          />
          <Image
            style={{ position: "absolute", right: "0%" }}
            source={require("../assets/img/rect_no_active.png")}
          />
        </View>
        <Text style={styles.headerTitle}>FIND WALKING BUDDY</Text>
        <Text style={styles.subTitle}>Help you find friends who share the same running goals</Text>
      </View>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.btn_back}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Onboard-1")}
      >
        <Image
          style={styles.backIcon}
          source={require("../assets/img/Back.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btn_orange}
        onPress={() => navigation.navigate("Onboard-3")}
      >
        <Text style={styles.textInbutton}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

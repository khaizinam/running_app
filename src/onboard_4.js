import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "../component/style";

//

export default function Page4({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image  source={require("./img/onboard4.png")}/>
      </View>

      <View style={styles.title_wrap}>
        <View style={styles.slide_point}>
          <Image
            style={{ position: "absolute", left: 0 }}
            source={require("./img/rect_no_active.png")}
          />
          <Image
            style={{ position: "absolute", left: "42%" }}
            source={require("./img/rect_no_active.png")}
          />
          <Image
            style={{ position: "absolute", right: "0%" }}
            source={require("./img/rect_avtived.png")}
          />
        </View>
        <Text style={styles.headerTitle}>CREATE A HEALTHY COMMUNITY</Text>
        <Text style={styles.subTitle}>Make the community more active and healthy</Text>
      </View>

      <StatusBar style="auto" />

      <View style={styles.groups_btn}>
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btn_orange}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.textInbutton}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View> 
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btn_orange}
            onPress={() => navigation.navigate("Onboard-1")}
          >
            <Text style={styles.textInbutton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

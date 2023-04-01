import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { Image, View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "../component/style";

export default function Page1({ navigation }) {
  // const [myText, setMyText] = useState("GET START");
  const navigator = (navigation) => {
    navigation.navigate("Onboard-2");
    // if (myText=='GET START'){ setMyText('clicked')}
    // else setMyText('GET START')
    // setMyText('NEXT')
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.banner}>
        <Image  source={require("./img/onboard1.png")} />
      </View>
      <View style={styles.title_wrap}>
        <Text style={styles.headerTitle}>WELCOME TO PACEPAL</Text>
        <Text style={styles.subTitle}>Suggest runners within a 1km radius around you</Text>
      </View>
      <View style={styles.groups_btn}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigator(navigation)}
          style={styles.btn_orange}
        >
          <Text style={styles.textInbutton}>GET START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; //icons
const { width, height } = Dimensions.get("screen");
export default AreaSelection = function ({ navigation }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{position:'absolute', top:0.07*height,left:0.1*width}} onPress={()=>navigation.navigate('Home')}>
      <Icon name="close" size={50} color={'#C88D8D'} />
      </TouchableOpacity>
      
      <Image source={require("../assets/images/logo.jpg")} style={styles.logo} />
      
      <Text style={styles.title}>Chọn khu vực sử dụng</Text>      
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button1}
      >
        <Text style={styles.buttonText1}>TP.Hồ Chí Minh</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button1}
      >
        <Text style={styles.buttonText1}>TP.Hà Nội</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button1}
      >
        <Text style={styles.buttonText1}>TP.Đà Nẵng</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  title: {
    color: "#6D9FCD",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginVertical: 20,
    marginTop: 15,
  },
  logo: {
    marginTop: 20,
    width: 0.35*width,
    height: 0.22*height,
    marginBottom: 50,
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
    marginTop: 40,
    backgroundColor: "#FFDFDF",
    padding: 10,
    width: 0.7*width,
    height: 0.065*height,
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
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
 
});

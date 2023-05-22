import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("screen");

export default Register = function ({ navigation }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [customer, setCustomer] = useState([]);
  const [admin, setAdmin] = useState([]);

  const handleRegister = () => {
    var flag = false;

    if (
      username === "" ||
      phone === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      alert("Please enter all register infomation");
      return;
    }

    if (password !== confirmpassword) {
      alert("The password confirmation does not match!");
      return;
    }



    

    if (flag) {
      return;
    }

    if (
      isNaN(phone) ||
      phone.includes("e") ||
      phone.includes(".") ||
      phone.length < 10 ||
      phone.length > 11
    ) {
      alert("Invalid phone number!");
      return;
    }
    navigation.navigate("Welcome")
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{ alignSelf: "left", marginLeft: 23 }}
      >
        <Icon name="arrow-left" size={30} color={'#E77C7C'} />
      </TouchableOpacity>

      <Text
        style={{
          fontWeight: "bold",
          color: "#fff",
          fontSize: 30,
          marginTop: 5,
        }}
      >
        Register{" "}
      </Text>

      <View style={styles.mainbox}>
        <View >
            <Text style={{color:'#fff', marginBottom:15, marginLeft:10, fontWeight:600,}}>Username</Text>
        </View>
        <View style={styles.phone}>
          <Icon
            name="user-o"
            size={20}
            color="#b97e7e"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Username"
            style={{ flex: 1, paddingVertical: 0 }}
            placeholderTextColor="#b4b4b4"
            onChangeText={(newText) => setUsername(newText)}
          />
        </View>

        <View >
            <Text style={{color:'#fff', marginBottom:15, marginLeft:10, fontWeight:600,}}>Phone</Text>
        </View>
        <View style={styles.phone}>

          <Icon
            name="phone"
            size={20}
            color="#b97e7e"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Phone number"
            style={{ flex: 1, paddingVertical: 0 }}
            placeholderTextColor="#b4b4b4"
            onChangeText={(newText) => setPhone(newText)}
          />
        </View>

        
        <View >
            <Text style={{color:'#fff', marginBottom:15, marginLeft:10, fontWeight:600,}}>Password</Text>
        </View>
        <View style={styles.phone}>
          <Icon
            name="lock"
            size={20}
            color="#b97e7e"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            placeholderTextColor="#b4b4b4"
            onChangeText={(newText) => setPassword(newText)}
          />
        </View>
        <View >
            <Text style={{color:'#fff', marginBottom:15, marginLeft:10, fontWeight:600,}}>Confirm</Text>
        </View>
        <View style={styles.phone}>
          <Icon
            name="lock"
            size={20}
            color="#b97e7e"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Confirm password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            placeholderTextColor="#b4b4b4"
            onChangeText={(newText) => setConfirmpassword(newText)}
          />
        </View>

        <TouchableOpacity
          onPress={() => handleRegister()}
          style={{
            marginTop: 20,
            backgroundColor: "#e77c7c",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            padding: 12,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>
            Register
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              borderBottomWidth: 1,
              borderBottomColor: "white",
            }}
          ></View>
          <Text style={{ textAlign: "center", marginHorizontal: 10 , color:'white'}}>
            {" "}
            Or{" "}
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              borderBottomWidth: 1,
              borderBottomColor: "white",
            }}
          ></View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: "#C14949",
              borderRadius: 10,
              paddingHorizontal: 45,
              paddingVertical: 8,
            }}
          >
            <Icon name="google" size={20} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: "#8CBCE9",
              borderRadius: 10,
              paddingHorizontal: 45,
              paddingVertical: 8,
            }}
          >
            <Icon name="facebook" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 15,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{color:'white'}}>Have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{ color: "#ff8e4f", fontWeight: "600", marginTop: 10, fontSize:15, }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#284C83",
  },
  mainbox: {
    marginTop: 30,
    height: height * 0.75,
    width: width * 0.85,
    backgroundColor: "#284C83",
    marginBottom: 30,
    borderRadius: 40,
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },
  phone: {
    flexDirection: "row",
    borderColor: "#deacac",
    borderWidth: 1,
    padding: 11,
    backgroundColor: "#FFF9F9",
    borderRadius: 20,
    marginBottom: 27,
  },
});

import { Dimensions, StyleSheet } from "react-native";
//
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
console.log(windowWidth, windowHeight)
export default StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:0,
  },
  banner: {
    width: '100%',
    height: '60%',
    marginTop:20,
  },
  title_wrap:{
    marginBottom:20,
    height: '25%',
    alignItems:'center',
  },
  btn_orange: {
    width: 180,
    height: 58,
    border: "none",
    backgroundColor: "#F9762D",
    marginBottom: 50,
    borderRadius: 30,
  },
  textInbutton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 58 / 2 - 10,
    textAlign: "center",
  },
  
  headerTitle: {
    width: windowWidth - 50,
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    marginBottom:20,
    textAlign: "center",
    color: "#000000",
  },
  subTitle: {
    width: windowWidth - 140,
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 20,
    textAlign: "center",
    color: "#000000",
  },
  backIcon: {
    width: 58,
    height: 58,
  },
  slide_point: {
    width: 59,
    height: 9,
    marginBottom:20,
  },
  btn_login: {
    position: "absolute",
    border: "none",
    backgroundColor: "#F9762D",
    borderRadius: 30,
    width: 167,
    height: 74,
  },
  btn_signin: {
    border: "none",
    backgroundColor: "#F9762D",
    borderRadius: 30,
    position: "absolute",
    width: 167,
    height: 74,
  },
  groups_btn:{
    // display:'flex',
    height: '15%',
    flexDirection: 'row',
    width:'100%',
    justifyContent:'space-around'
  },
  btn_back: {
    width: 58,
    height: 58,
  },
});

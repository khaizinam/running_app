import React,{ Component, useRef, useState,useEffect,Platform} from 'react';
import { 
  Image, 
  View, 
  Text, 
  Pressable, 
  TouchableOpacity,
  StyleSheet ,Dimensions} from "react-native";
import {GOOGLE_MAP_KEY} from '../constants/googleMapAPI'
import MapView,{AnimatedRegion, Marker }from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import imagePath from '../constants/imagePath';
import * as Location from 'expo-location';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function Home({navigation}) {
  const mapref = useRef();
  const markerRef = useRef();
  // STATE
  const [state, setState]= useState({
    curLoc:{
      latitude: 10.982024,
      longitude: 106.8090804,
    },
    destinationCords:{},
    formatted_address:'Chọn điểm đến!',
    iLoading:false,
    cordinate: new AnimatedRegion({
      latitude: 10.982024,
      longitude: 106.8090804,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }),
    time :0,
    distance: 0
  });
  const { curLoc, destinationCords, iLoading, cordinate ,formatted_address,time,distance}= state;
  
  // GET LIVE LOCATION
  const getLiveLocation = async()=>{

    const {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      console.log("please grant location permission");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    let lat = location.coords.latitude
    let lng = location.coords.longitude
    animate(lat,lng)
    
    setState({
      ...state,
      curLoc:{
        latitude : lat,
        longitude : lng
      },
      cordinate: new AnimatedRegion({
        latitude: lat,
        longitude: lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      })
    })
    //console.log(location)
  }
  useEffect(()=>{
    getLiveLocation();
  },[])
  useEffect(()=>{
    const interval = setInterval(() => {
      getLiveLocation();
    }, 6000);
    return ()=>clearInterval(interval);
  })
  
  const onPressLocation =()=> {
    navigation.navigate('chooseLocation',{ getCordinates: fetchValues})
  }
  
  const fetchValues = (data)=>{
    setState({
      destinationCords:{
        latitude : data.destinationCords.latitude,
        longitude : data.destinationCords.longitude
      },
      formatted_address : data.textAddress
    })
  }

  const animate = (lat,lng)=>{
    const newCoordinate = {lat,lng};
    if(markerRef.current){
      markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000)
    }
  }

  const onCenter=()=>{
    mapref.current.animateToRegion({
      latitude: curLoc.latitude,
      longitude: curLoc.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    })
  }
  const fetchTime=(d, t)=>{
    setState(state=>({
      ...state,
      time : t,
      distance:d
    }))
  }
  return (
    < View style={styles.container}>
        <TouchableOpacity
            style={styles.searchBtn}
            onPress={onPressLocation}
        >
            <Text>{formatted_address}</Text>
        </TouchableOpacity>
        <View style={styles.topBar}>
        </View>
        <View style={styles.topDownBar}>
        </View>
        <View style={{flex:1}}>
            <MapView ref={mapref} style={StyleSheet.absoluteFill}
                initialRegion={{
                  ...curLoc,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA
                }}
            >
                <Marker.Animated ref = {markerRef} coordinate={cordinate} image={imagePath.icCurLoc} />
                
                {Object.keys(destinationCords).length > 0 &&(<Marker coordinate={destinationCords} image={imagePath.icGreenMarker} />)}
                {Object.keys(destinationCords).length > 0 &&(
                  <MapViewDirections
                    origin={curLoc} destination={destinationCords}
                    apikey={GOOGLE_MAP_KEY}
                    strokeWidth={5}
                    strokeColor='red'
                    optimizeWaypoints={true}
                    onReady={ result => {
                      fetchTime(result.distance, result.duration)
                      mapref.current.fitToCoordinates(result.coordinates, {
                          edgePadding:{
                          }
                      })
                      }
                    }
                    onError={(errorMessage)=>{}}
                  />
                )}
            </MapView>
            <TouchableOpacity
              style={{position:'absolute', top:0, right: 0}}
              onPress={onCenter}
            >
                <Image source={imagePath.greenIndicator}/>
            </TouchableOpacity>
        </View>
        <View style={styles.statusBar}>
        { distance !==0 && time !== 0 &&(
          <View style={{alignItems:'center'}}>
            <Text style={styles.subTitle_1}>{Math.floor(time)} Phút</Text>
            <Text style={styles.subTitle_2}>{Math.floor(distance)} Km</Text> 
          </View>
        )}
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  topBar:{
    height:80,
    backgroundColor :'#1B202D',
    width:'100%',
    padding:14,
  },
  topDownBar:{
    height:150,
    backgroundColor :'white',
    width:'100%',
  },
  searchBtn:{
    position:'absolute',
    zIndex:10,
    top:40,
    left: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    height: 48,
    width:screen.width - 30,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: 16
  },
  statusBar:{
    height:50,
    marginVertical: 16,
  },
  subTitle_1:{
    fontSize:20,
    fontWeight:'bold',

  },
  subTitle_2:{
    fontSize:16,
    color:'#796F6F'
  }
})
export default Home;

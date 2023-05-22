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
    iLoading:false,
    cordinate: new AnimatedRegion({
      latitude: 10.982024,
      longitude: 106.8090804,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    })
  });
  const { curLoc, destinationCords, iLoading, cordinate }= state;
  
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
    onCenter();
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
      }
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
  return (
    < View style={{flex:1}}>
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
                    strokeWidth={3}
                    strokeColor='hotpink'
                    optimizeWaypoints={true}
                    onReady={ result => {
                      mapref.current.fitToCoordinates(result.coordinates, {
                          edgePadding:{
                              // right: 30,
                              // bottom: 150,
                              // left: 30,
                              // top:100
                          }
                      })
                      }
                    }
                    onError={(errorMessage)=>{}}
                  />
                )}
            </MapView>
            <TouchableOpacity
              style={{position:'absolute', bottom:0, right: 0}}
              onPress={onCenter}
            >
                <Image source={imagePath.greenIndicator}/>
            </TouchableOpacity>
        </View>
        <View style={styles.bottomCard}>
            <Text>Where are you going...?</Text>
            <TouchableOpacity
                style={styles.inputStyle}
                onPress={onPressLocation}
            >
                <Text>Choose your lacation</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  bottomCard:{
    backgroundColor :'white',
    width:'100%',
    padding:30,
    borderTopEndRadius:24,
    borderTopStartRadius:24
  },
  inputStyle:{
    backgroundColor: 'green',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    marginTop: 16
  }
})
export default Home;

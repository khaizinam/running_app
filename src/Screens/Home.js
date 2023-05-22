import React,{ Component, useRef, useState,useEffect} from 'react';
import { 
  Image, 
  View, 
  Text, 
  Pressable, 
  TouchableOpacity,
  StyleSheet ,Dimensions} from "react-native";
import {GOOGLE_MAP_KEY} from '../constants/googleMapAPI'
import MapView,{Marker }from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import imagePath from '../constants/imagePath';
import * as Location from 'expo-location';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function Home({navigation}) {

  useEffect(()=>{
    const res = getLiveLocation();
    if (res !== false)
      {
        console.log("location: ", res)
        setState({
        startingCords:{
          latitude : res.latitude,
          longitude : res.longitude
        },
        destinationCords:{
          latitude : res.latitude,
          longitude : res.longitude
        }
      })
    }
  },[])

  const getLiveLocation = async()=>{
    const {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      console.log("please grant location permission");
      return false;
    }
    const location = await Location.getCurrentPositionAsync({});
    return location.coords
  }

  const [state, setState]= useState({
    startingCords:{
      latitude: 10.882024,
      longitude: 106.8090804,
    },
    destinationCords:{
      latitude: 11.882024,
      longitude: 106.8090804,
    }
  });

  const mapref = useRef();

  const {startingCords,destinationCords}= state;
  
  const onPressLocation =()=> {
    navigation.navigate('chooseLocation',{ getCordinates: fetchValues})
  }
  const fetchValues = (data)=>{
    setState({
      startingCords:{
        latitude : data.pickupCords.latitude,
        longitude : data.pickupCords.longitude
      },
      destinationCords:{
        latitude : data.destinationCords.latitude,
        longitude : data.destinationCords.longitude
      }
    })
    console.log(data)
  }
  return (
    < View style={{flex:1}}>
        <View style={{flex:1}}>
            <MapView
                ref={mapref}
                style={StyleSheet.absoluteFill}
                initialRegion={{
                  ...startingCords,
                  latitudeDelta: LONGITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA
                }}
            >
                <Marker
                coordinate={startingCords}
                image={imagePath.icCurLoc}
                />
                <Marker
                coordinate={destinationCords}
                image={imagePath.icGreenMarker}
                />
                <MapViewDirections
                  origin={startingCords}
                  destination={destinationCords}
                  apikey={GOOGLE_MAP_KEY}
                  strokeWidth={3}
                  strokeColor='hotpink'
                  optimizeWaypoints={true}
                  onReady={ result => {
                      mapref.current.fitToCoordinates(result.coordinates, {
                          edgePadding:{
                              right: 30,
                              bottom: 150,
                              left: 30,
                              top:100
                          }
                      })
                      }
                  }
                  onError={(errorMessage)=>{
                      //log
                  }}
                />
            </MapView>
        </View>
        <View style={styles.bottomCard}>
            <Text>Where are you going...?</Text>
            <TouchableOpacity
                style={styles.inputStyle}
                onPress={onPressLocation}
            >
                <Text style={{color:'#ffffff', fontWeight:'600'}}>Choose your lacation</Text>
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
    marginTop: 16,
    color: '#ffffff',
  }
})
export default Home;

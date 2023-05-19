import React,{ Component, useRef, useState} from 'react';
import { 
  Image, 
  View, 
  Text, 
  Pressable, 
  TouchableOpacity,
  StyleSheet } from "react-native";
import {GOOGLE_MAP_KEY} from '../constants/googleMapAPI'
import MapView,{Marker }from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import imagePath from '../constants/imagePath';

function Home() {
  const [state, setState]= useState({
    pickupCords:{
      latitude: 10.762622,
      longitude: 106.660172,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCors:{
      latitude: 10.762700,
      longitude: 106.685200,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  });
  const mapref = useRef()
  const {pickupCords,droplocationCors}= state

  return (
    < View style={{flex:1}}>
        <View style={{flex:1}}>
            <MapView
                ref={mapref}
                style={StyleSheet.absoluteFill}
                initialRegion={pickupCords}
            >
                <Marker
                coordinate={pickupCords}
                image={imagePath.icCurLoc}
                />
                <Marker
                coordinate={droplocationCors}
                image={imagePath.icGreenMarker}
                />
                <MapViewDirections
                origin={pickupCords}
                destination={droplocationCors}
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

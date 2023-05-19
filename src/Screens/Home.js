import React,{ Component, useRef, useState} from 'react';
import { 
  Image, 
  View, 
  Text, 
  Pressable, 
  TouchableOpacity,
  StyleSheet } from "react-native";
import MapView,{Marker }from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

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
    < View style={styles.container}>
      <MapView
        ref={mapref}
        style={StyleSheet.absoluteFill}
        initialRegion={pickupCords}
      >
        <Marker
          coordinate={pickupCords}
        />
        <Marker
          coordinate={droplocationCors}
        />
        <MapViewDirections
          origin={pickupCords}
          destination={droplocationCors}
          apikey={'AIzaSyA-3pTPVsa4Wr0XhsccIY48UbfIMpUkb7I'}
          strokeWidth={3}
          strokeColor='hotpink'
          optimizeWaypoints={true}
          onReady={ result => {
            mapref.current.fitToCoordinates(result.coordinates, {
                edgePadding:{
                  right: 30,
                  bottom: 300,
                  left: 30,
                  top:100
                }
              })
            }
          }
        />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  }
})
export default Home;

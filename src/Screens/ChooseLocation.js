import React,{Component, useState} from 'react';
import {View, StyleSheet,ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
//conponent
import AdressPickup from '../components/AdressPickup';
import CustomButton from '../components/CustomButton';


const ChooseLocation = (props) => {

    const navigation = useNavigation();

    const [state, setState] = useState({
        destinationCords:{}
    })
    const {destinationCords} = state;
    const checkValid=()=>{
        // if(Object.keys(pickupCords).length===0){
        //     alert("Plasse enter your pickup location");
        //     return false;
        // }
        if(Object.keys(destinationCords).length===0){
            alert("Plasse enter your destination location");
            return false;
        }
        return true;
    }
    const onDone =()=>{
        const isValid = checkValid();
        if(isValid){
            props.route.params.getCordinates({
                destinationCords
            })
            navigation.goBack();
        }
    };

    const fetchDestinationCords=(lat,lng)=>{
        setState({
            ...state,destinationCords:{
                latitude:lat,
                longitude:lng
            }
        })
    }
    //console.log("props: ",props);
    // console.log("pickupCords: ", pickupCords)
    // console.log("destiantionCords: ", destinationCords)
    return (
        <View style={styles.container}>
            {/* <ScrollView
                style={{padding:16,backgroundColor:'white'}}
                keyboardShouldPersistTaps={"always"}
                scrollEnabled={true}
                nestedScrollEnabled={true}
            > */}
                <AdressPickup
                    placeholderText="Chọn điểm đến"
                    fetchAdress={fetchDestinationCords}
                />
                <CustomButton
                    btnText="DONE"
                    btnStyle={{marginTop:24}}
                    onPress={onDone}
                />
            {/* </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginTop:0,
        backgroundColor:'white'
    }
})

export default ChooseLocation;

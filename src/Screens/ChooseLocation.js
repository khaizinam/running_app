import React,{Component, useState} from 'react';
import {View,Text, StyleSheet,ScrollView,Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
//conponent
import AdressPickup from '../components/AdressPickup';
import CustomButton from '../components/CustomButton';

const screen = Dimensions.get('window');
const ChooseLocation = (props) => {

    const navigation = useNavigation();

    const [state, setState] = useState({
        destinationCords:{},
        textAddress:'...'
    })
    const {destinationCords,textAddress } = state;
    const checkValid=()=>{
        if(Object.keys(destinationCords).length===0){
            alert("Bạn chưa chọn điểm đến");
            return false;
        }
        return true;
    }
    const onDone =()=>{
        const isValid = checkValid();
        if(isValid){
            props.route.params.getCordinates({
                destinationCords,
                textAddress
            })
            navigation.goBack();
        }
    };

    const fetchDestinationCords=(lat, lng, formatted_address)=>{
        setState({
            ...state,destinationCords:{
                latitude:lat,
                longitude:lng
            },
            textAddress : formatted_address
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.container_1}>
                <Text style={styles.text_1}>{textAddress}</Text>
                <CustomButton
                    btnText="Đi đến"
                    btnStyle={styles.bttnDone}
                    onPress={onDone}
                />
            </View>
            <AdressPickup
                placeholderText="Chọn điểm đến"
                fetchAdress={fetchDestinationCords}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginTop:0,
        backgroundColor:'white'
    },
    bttnDone:{
        width:70,
        marginHorizontal:0,
        marginVertical:5
    },
    container_1:{
        backgroundColor:'#1B202D',
        padding:14,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: screen.width
    },
    text_1:{
        fontWeight:'bold',
        width:screen.width-95,
        padding:14,
        color: 'white',
    }
})

export default ChooseLocation;

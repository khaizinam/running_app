import React from 'react';
import {View, StyleSheet} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_KEY } from '../constants/googleMapAPI';

const AdressPickup = ({
    placeholderText,
    fetchAdress
}) => {
    const onPressAdress=(data, details) => {
        //console.log(details);
        const lat = details.geometry.location.lat;
        const lng = details.geometry.location.lng;
        fetchAdress(lat, lng);
    }
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                keyboardShouldPersistTaps={'handled'}
                fetchDetails ={true}
                placeholder={placeholderText}
                onPress={onPressAdress}
                query={{
                    key: GOOGLE_MAP_KEY,
                    language: 'en',
                }}
                styles={{
                    textInputContainer: styles.containerStyle,
                    textInput: styles.textInputStyle
                }}
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    containerStyle:{
        backgroundColor:'F4F3FF',
    },
    textInputStyle:{
        height:48,
        color: 'black',
        fontSize:16,
        backgroundColor:'#F3F3F3'
    }

})

export default AdressPickup;

import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';

const CustomButton = ({
    onPress =()=>{},
    btnStyle = {},
    btnText
}) => {

    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style = {{...styles.btnStyle, ...btnStyle}}
            >
                <Text>{btnText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btnStyle:{
        height:48,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal:16,
        borderWidth:1
    }
})

export default CustomButton;

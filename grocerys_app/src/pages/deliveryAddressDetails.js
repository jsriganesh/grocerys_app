//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import Labels from '../utils/labels';
import theme from '../utils/theme';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../utils/constants';
import CommonHeader from '../components/commonHeader';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// create a component

const DeliveryAddressIsEmpty = () => {
    return(
        <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text style={theme.addressEmptyText}>{Labels.addressEmpty}</Text>
            <Text style={theme.addressEmptyNotesText}>{Labels.addressEmptyNotes1}</Text>
            <Text style={theme.addressEmptyNotesText}>{Labels.addressEmptyNotes2}</Text>
        </View>
    )
}


const AddressTextBox=(props)=>{
    // if(props.textBoxKey == "")
    return(
        <View style={{marginHorizontal:15,marginVertical:10}}>
            <TextInput
                label={props.label}
                secureTextEntry
                // right={<TextInput.Icon name="eye" />}
                style={{ 
                    backgroundColor: colors.appBackgroundColor
                }}
                theme={{ colors: { text: 'black', primary: colors.themeColor}}}

                />
            {/* <Text style={{color:colors.themeColor,fontSize:15}}>{props.label}</Text>
            <TextInput style={{borderBottomColor:colors.themeColor,borderBottomWidth:1,height:35,padding:0}}/> */}
        </View>
    )
}

const AddNewDeliveryAddress = () => {
    return(

        <View>
            <AddressTextBox label={"Name"} value={""} textBoxKey={"name"}/>
            <AddressTextBox label={"Mobile Number"} value={""} textBoxKey={"name"}/>
            <AddressTextBox label={"Address"} value={""} textBoxKey={"name"}/>
            <AddressTextBox label={"Land Mork"} value={""} textBoxKey={"name"}/>
            <AddressTextBox label={"City"} value={""} textBoxKey={"name"}/>
            <AddressTextBox label={"State"} value={""} textBoxKey={"name"}/>
            <AddressTextBox label={"Country"} value={""} textBoxKey={"name"}/>
            <AddressTextBox label={"Pin Code"} value={""} textBoxKey={"name"}/>
        </View>
//         <View style={{}}>
//             <TextInput
//       mode='outlined'
//       label={"Name"}
//       placeholder={"props.placeholder"}
//       placeholderTextColor={colors.black}
//     //   secureTextEntry={}
//     //   multiline={props.multiline}
//       keyboardType={"default"}
//       value={"g"}
//       onChangeText={(value) =>{}}
//       style={{ color: 'red', 
//     //   backgroundColor: "transprant",
//       borderRadius: 5, height: 50 
// }}
//       theme={{ colors: { text: 'black', primary: colors.themeColor}}}
//     />
//         </View>
    )
}

const DeliveryAddress = () => {
    function addAddress(){
        alert("test")
    }
    return (
        <KeyboardAwareScrollView>

        <View style={styles.container}>
            <CommonHeader headerName={Labels.SavedAddress} addNewAddress={true} addAddress={addAddress}/>
            {/* <DeliveryAddressIsEmpty/> */}
            <AddNewDeliveryAddress/>
        </View>
        </KeyboardAwareScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.appBackgroundColor,

    },
});

//make this component available to the app
export default DeliveryAddress;

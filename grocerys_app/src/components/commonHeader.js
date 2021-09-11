
// import { Container } from './styles';

// const CommonHeader = memo((props) =>{
//     // alert("krishhhh")
//  console.log(">>>>>>>>Common Header")
//     return(
//         <Appbar.Header>
//         <Appbar.Content title="Home" />
//         <Appbar.Action icon="magnify" />
//         <Appbar.Action icon="dots-vertical" />
//     </Appbar.Header>
//     )
// })

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Labels from '../utils/labels';
import theme from '../utils/theme';
import { useNavigation } from '@react-navigation/native';

// create a component
const CommonHeader = (props) => {
    const navigation = useNavigation()
    return (
        <View style={theme.headerStyle}>
            <View style={{ flex: 0.3 }}>
                {
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => { navigation.goBack() }}>
                        <Image source={require("../../assets/images/back_icon.png")} style={theme.backArrowStyle} />
                        <Text style={theme.headerBackNameStyle}>{Labels.back}</Text>
                    </TouchableOpacity>
                }
            </View>
            <View style={{ flex: 0.4, alignItems: "center" }}>
                <Text style={theme.headerNameStyle}>{props.headerName}</Text>
            </View>
            <View style={{ flex: 0.3, alignItems: "flex-end" }}>
                {
                    props.addNewAddress ?
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => { props.addAddress() }}>
                            <Image source={require("../../assets/images/plus.png")} style={theme.addAddressIcon} />
                            <Text style={theme.headerBackNameStyle}>{Labels.addNewAddress}</Text>
                        </TouchableOpacity>
                        : null
                }

            </View>



        </View>
    );
};

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

//make this component available to the app
export default CommonHeader
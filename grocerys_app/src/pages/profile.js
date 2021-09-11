//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../utils/colors';
import theme from '../utils/theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ScreenNames from '../utils/constants';
import { useNavigation } from '@react-navigation/native';
import CommonFooter from "../components/CommonFooter"

// create a component

const ProfileHeader = () => {
    return (
        <View style={theme.profileHeaderStyle}>
            <Image source={require("../../assets/images/add_image.png")} style={{ height: 150, width: 150 }} />
            <Text style={theme.profileUserName}>{"Sriganesh"}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../../assets/images/profileMail.png")} style={theme.profileIcons} />
                <Text style={theme.profileEmail}>{"jsriganesh@gmail.com"}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../../assets/images/profilePhone.png")} style={theme.profileIcons} />
                <Text style={theme.profileEmail}>{"8009004268"}</Text>
            </View>

        </View>
    )
}

const Profile = () => {
    const navigation = useNavigation();

    const options = [
        { label: "My Orders", pageName: ScreenNames.OrderList },
        { label: "Delivery Address", pageName: ScreenNames.DeliveryAddress},
        { label: "Contact Us" },
        { label: "Feedbacks" }
    ]
    return (
        <View style={styles.container}>
           <View style={{flex:1}}>
            <ProfileHeader />

            {
                options.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={theme.profileOptions} onPress={() => { navigation.navigate(item.pageName) }}>
                            <Text>{item.label}</Text>
                            <Icon name={"angle-right"} size={30} />
                        </TouchableOpacity>
                    )
                })
            }
            </View>
            <CommonFooter/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',

        backgroundColor: colors.appBackgroundColor,
    },
});

//make this component available to the app
export default Profile;

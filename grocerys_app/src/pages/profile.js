//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import theme from '../utils/theme';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ScreenNames from '../utils/constants';
import { useNavigation } from '@react-navigation/native';

// create a component
const Profile = () => {
    const navigation = useNavigation();

    const options = [
        { label: "My Orders", pageName: ScreenNames.OrderList },
        { label: "Delivery Address" },
        { label: "Contact Us" },
        { label: "Feedbacks" }
    ]
    return (
        <View style={styles.container}>
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
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginHorizontal: 15,
        backgroundColor: colors.appBackgroundColor,
    },
});

//make this component available to the app
export default Profile;

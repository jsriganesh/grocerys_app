//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../utils/colors';
import Labels from '../utils/labels';
import theme from '../utils/theme';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../utils/constants';
import CommonHeader from '../components/commonHeader';
import Timeline from 'react-native-timeline-flatlist'

// create a component
const OrderStatus = () => {
    // const data = [
    //     { title: 'Event 1', description: 'Event 1 Description'},
    //     {description: 'Event 2 Description'},
    //     { title: 'Event 3',},
    //     {title: 'Event 4',},
    //     {time: 'o', title: 'Event 5', }
    //   ]
    
    const currentStatus = 3

    const data = [
        {
            title: "Order Placed",
            order:1,
        },
        {
            title: "Ready For Dispatch",
            order:2,
            // title:"Packed"
        },
        {
            title: "Dispatched",
            order:3,
            // title:"Shipped"
        },
        {
            title: "Delivered",
            order:4,
        }
    ]
    return (
        <View style={styles.container}>
            <CommonHeader headerName={Labels.orderStatus} />

            <View style={{marginLeft:40,marginTop:20}}>
                {
                    data.map((types, index) => {
                        return (
                            <View>
                                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                                    {
                                        currentStatus > index ?
                                        <Image source={require("../../assets/images/ok.png")} style={{ height: 20, width: 20, marginRight: 10 }} />
                                        :
                                        <Image source={require("../../assets/images/inprogress.png")} style={{ tintColor:"#888888",height: 20, width: 20, marginRight: 10 }} />
                                    }
                                    <Text>{types.title}</Text>
                                </View>
                                {
                                    types.title == "Delivered" ?
                                        null :
                                        <View style={{ width: 2, height: 80, borderLeftColor: 
                                            currentStatus > index+1 ?
                                            colors.successGreenColor
                                            :"#888888"
                                            , borderLeftWidth: 2, marginHorizontal: 10 }} />
                                }
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackgroundColor,
        // marginHorizontal: 10,
    },
});

//make this component available to the app
export default OrderStatus;

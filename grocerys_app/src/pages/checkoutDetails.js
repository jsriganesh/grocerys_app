//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import Labels from '../utils/labels';
import theme from "../utils/theme";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// create a component

const rupee = "₹"

const DeliveryAddress = () => {
    return (
        <View style={{marginVertical:10}}>
            <Text style={[theme.cartProductDetails, { marginVertical: 10 }]} numberOfLines={1}>{Labels.deliveryAddress}</Text>

            <Text style={[theme.cartProductDetails]} numberOfLines={1}>{Labels.sampleName}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flex: 0.9 }}>
                    <Text style={[theme.addressDetails]} numberOfLines={2}>{Labels.sampleAddress}</Text>
                </View>
                <TouchableOpacity style={{ flex: 0.1 }}>
                    <Icon name={"angle-right"} size={30} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
                <Text style={[theme.addressDetails]} numberOfLines={1}>{Labels.mobileNo}</Text>
                <Text style={[theme.cartProductDetails]} numberOfLines={1}>{Labels.samplemobileNo}</Text>
            </View>
        </View>
    )
}


const PaymentMethod = () => {
    return (
        <View>
            <Text style={[theme.cartProductDetails, { marginVertical: 10 }]} numberOfLines={1}>{Labels.paymentMethod}</Text>

        </View>
    )
}

const ProductDetails = () => {
    return (
        <View style={{marginVertical:5}}>
            <Text style={{ fontSize: 17, fontWeight: "bold", marginVertical: 10 }}>{Labels.PriceDetails}{" (1 Items)"}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 6 }}>
                <Text style={{ fontSize: 15, fontWeight: "400" }}>{Labels.CartTotal}</Text>
                <Text style={{ fontSize: 15 }}>{rupee}{" "}{"200"}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 15, fontWeight: "400" }}>{Labels.CartDiscount}</Text>
                <Text style={{ fontSize: 15, color: colors.successGreenColor }}>{"- "}{rupee}{" "}{"200"}</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 15, fontWeight: "400" }}>{Labels.subAmount}</Text>
                <Text style={{ fontSize: 15 }}>{rupee}{" "}{"200"}</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 15, fontWeight: "400" }}>{Labels.deliveryCharge}</Text>
                <Text style={{ fontSize: 15 }}>{rupee}{" "}{"200"}</Text>
            </View>

            <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", borderTopWidth: 0.5, borderTopColor: "#888888" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 10 }}>{Labels.TotalAmountPayable}</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.themeColor }}>{rupee}{" "}{"200"}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.successGreenColor }}>{Labels.YouSave}{rupee}{" "}{"200"}</Text>
            </View>
        </View>
    )
}

const CheckoutDetails = () => {
    return (
        <View style={styles.container}>
            <DeliveryAddress />
            <ProductDetails />
            <PaymentMethod/>
            <PaymentMethod/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CheckoutDetails;

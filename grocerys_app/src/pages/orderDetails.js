//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import colors from '../utils/colors';
import Labels from '../utils/labels';
import theme from "../utils/theme";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// create a component

const rupee = "₹"

const ProductDetails = () => {
    return (
        <View style={theme.orderDetailsCardView}>
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
            <TouchableOpacity style={theme.paymentMethodButtonView}>
                <Text style={theme.paymentMethodButtonText}>{Labels.paymentMethod}</Text>
                <Text style={theme.paymentMethodButtonText}>{"COD"}</Text>
            </TouchableOpacity>
        </View>
    )
}

const ShippingInfo = () => {
    return (
        <View style={theme.orderDetailsCardView}>
            <Text style={theme.orderId}>{Labels.shippingInfo}</Text>
            <View style={theme.orderListStatusRow}>
                <Text style={[theme.orderListMediumText, { flex: 0.8, marginVertical: 5 }]}>{"2/178 ,dhasampalayam, mettupalayam, coimbatore"}</Text>
            </View>
            <Text style={[theme.orderListMediumText, { flex: 0.8 }]}>{"8344233713"}</Text>
        </View>
    )
}


const ProductList = () => {


    return (
        <View style={theme.renderProductList}>
            <View style={[theme.cartItems, { alignItems: "center" }]}>

                <Image style={theme.orderListProductImage} resizeMode={"cover"} source={require("../../assets/images/no_preview_image.png")} />

                <View style={[theme.cartDetails, { flex: 0.7 }]}>
                    <Text style={theme.cartProductDetails} numberOfLines={2}>{Labels.productNameAndDetails}</Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginVertical: 10 }}>
                        <Text style={theme.orderDetailsNormalText}>{Labels.quantity}</Text>
                        <Text style={theme.orderDetailsNormalText} numberOfLines={2}>{rupee}{" "}{"200"}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 }}>
                        <Text style={theme.orderDetailsNormalText}>{Labels.sellingPrice}</Text>
                        <Text style={theme.orderDetailsNormalText} numberOfLines={2}>{rupee}{" "}{"200"}</Text>
                    </View>

                </View>
            </View>

        </View>
    )
}

const OrderDetails = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ProductDetails />
                <ShippingInfo />
                <ProductList />
                <ProductList />
                <ProductList />
                <ProductList />
                <ProductList />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackgroundColor,
        marginHorizontal: 10,
    },
});

//make this component available to the app
export default OrderDetails;

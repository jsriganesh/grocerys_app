//import liraries
import React, { Component, useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import colors from '../utils/colors';
import Labels from '../utils/labels';
import CommonHeadr from "../components/commonHeader";
import LottieView from 'lottie-react-native';

import theme from "../utils/theme";
// create a component

const rupee = "₹"

const RenderProductList = () => {

    const [quantity, updateQuantity] = useState(5)

    return (
        <View style={theme.renderProductList}>
            <View style={theme.cartItems}>

                <Image style={theme.cartImage} resizeMode={"cover"} source={require("../../assets/images/no_preview_image.png")} />

                <View style={theme.cartDetails}>
                    <Text style={theme.cartProductDetails} numberOfLines={1}>{Labels.sampleDescription}</Text>

                    <View style={theme.cartItemAmountView}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={theme.cartItemAmountDis}>{rupee}{" "}{"200"}</Text>
                            <Text style={theme.cartItemAmount} numberOfLines={2}>{rupee}{" "}{"200"}</Text>
                        </View>

                        <View style={theme.cartItemQuantity}>
                            <TouchableOpacity style={theme.cartItemQuantityMinus}>
                                <Image source={require("../../assets/images/minus.png")} style={{ height: 5, width: 15 }} />
                            </TouchableOpacity>
                            <TextInput value={quantity} style={theme.cartItemQuantityTextBox} keyboardType={"number-pad"} />
                            <TouchableOpacity style={theme.cartItemQuantityPlus}>
                                <Image source={require("../../assets/images/plus.png")} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>

            <View style={theme.removeCartItem}>
                <TouchableOpacity>
                    <Text style={theme.removeText}>{Labels.Remove}</Text>
                </TouchableOpacity>

                <Text style={theme.cartItemTotalAmount}>{rupee}{" "}{"200"}</Text>

            </View>
        </View>
    )
}

const PriceDetails = () => {
    return (
        <View style={{ marginHorizontal: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold", marginVertical: 10 }}>{Labels.PriceDetails}{" (1 Items)"}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 6 }}>
                <Text style={{ fontSize: 15, fontWeight: "400" }}>{Labels.CartTotal}</Text>
                <Text style={{ fontSize: 15 }}>{rupee}{" "}{"200"}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 15, fontWeight: "400" }}>{Labels.CartDiscount}</Text>
                <Text style={{ fontSize: 15, color: colors.successGreenColor }}>{"- "}{rupee}{" "}{"200"}</Text>
            </View>
            <View style={{ marginTop:10,flexDirection: "row", justifyContent: "space-between",borderTopWidth:0.5,borderTopColor:"#888888" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 10 }}>{Labels.TotalAmount}{" (1 Items)"}</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.themeColor }}>{rupee}{" "}{"200"}</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.successGreenColor }}>{Labels.YouSave}{rupee}{" "}{"200"}</Text>
            </View>
        </View>
    )
}

const EmptyCart=()=>{
    return(
        <LottieView source={require('../../assets/animation/Animation_Empty_Cart.json')} autoPlay loop />
    )
}

const CheckOutButton=()=>{
    return(
        <View style={theme.checkOutButtonView}>
                <Text style={theme.mediumText}>{"Total (4 Items): "+rupee+" 250"}</Text>
                <TouchableOpacity style={theme.checkoutButton}>
                    <Text style={theme.checkoutButtonText}>{Labels.CheckOut}</Text>
                </TouchableOpacity>
        </View>
    )
}
const CartList = () => {
    
    return (
        // <EmptyCart/>
        <View style={styles.container}>
            {/* <CommonHeadr title={"CART"}/> */}

            

            <ScrollView >
                <RenderProductList />
                <RenderProductList />
                <RenderProductList />
                <RenderProductList />
                <RenderProductList />
                <RenderProductList />
                <PriceDetails />
            </ScrollView>


            <CheckOutButton/>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.white,
    },
});

//make this component available to the app
export default CartList;

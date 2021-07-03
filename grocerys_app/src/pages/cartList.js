//import liraries
import React, { Component, useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import colors from '../utils/colors';
import Labels from '../utils/labels';
import CommonHeadr from "../components/commonHeader";
import LottieView from 'lottie-react-native';
import { useNavigation,useFocusEffect ,useIsFocused} from '@react-navigation/native';

import theme from "../utils/theme";
import ScreenNames from '../utils/constants';
import { connect } from "react-redux";
import { ActionTypes } from '../redux/action/actionList';
// import { useFocusEffect } from '@react-navigation/native';

const mapStateToProps = (state) => ({
    cartList: state.cartListReducer.cartList
});


// create a component

const rupee = "₹"

const RenderProductList = (props) => {
    const {item,index} = props

    const [quantity, updateQuantity] = useState(5)

    return (
        <View style={theme.renderProductList} key={index}>
            <View style={theme.cartItems}>
                {
                    item.item_images.length > 0 && item.item_images[0].image ?
                    <Image style={theme.cartImage} resizeMode={"cover"} source={{uri:item.item_images[0].image}} />
                    : 
                    <Image style={theme.cartImage} resizeMode={"cover"} source={require("../../assets/images/no_preview_image.png")} />

                }
                <View style={theme.cartDetails}>
                    <Text style={theme.cartProductDetails} numberOfLines={1}>{item.item_name}</Text>

                    <View style={theme.cartItemAmountView}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={theme.cartItemAmountDis}>{rupee}{" "}{"200"}</Text>
                            <Text style={theme.cartItemAmount} numberOfLines={2}>{rupee}{" "}{"200"}</Text>
                        </View>

                        <View style={theme.cartItemQuantity}>
                            <TouchableOpacity style={theme.cartItemQuantityMinus}>
                                <Image source={require("../../assets/images/minus.png")} style={{ height: 5, width: 15 }} />
                            </TouchableOpacity>
                            <TextInput value={"1"} style={theme.cartItemQuantityTextBox} />
                            <TouchableOpacity style={theme.cartItemQuantityPlus}>
                                <Image source={require("../../assets/images/plus.png")} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>

            <View style={theme.removeCartItem}>
                <TouchableOpacity style={theme.cartItemDelete} onPress={()=>{
                     props.removeItem(index) 
                }}>
                    <Image source={require("../../assets/images/delete.png")} style={{ height: 20, width: 20 }}/>
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
            <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", borderTopWidth: 0.5, borderTopColor: "#888888" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 10 }}>{Labels.TotalAmount}{" (1 Items)"}</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.themeColor }}>{rupee}{" "}{"200"}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.successGreenColor }}>{Labels.YouSave}{rupee}{" "}{"200"}</Text>
            </View>
        </View>
    )
}

const EmptyCart = () => {
    return (
        <LottieView source={require('../../assets/animation/Animation_Empty_Cart.json')} autoPlay loop={false} />
    )
}

const CheckOutButton = () => {
    const navigation = useNavigation();

    return (
        <View style={theme.checkOutButtonView}>
            <Text style={theme.mediumText}>{"Total (4 Items): " + rupee + " 250"}</Text>
            <TouchableOpacity style={theme.checkoutButton} onPress={() => { navigation.navigate(ScreenNames.CheckoutDetails) }}>
                <Text style={theme.checkoutButtonText}>{Labels.CheckOut}</Text>
            </TouchableOpacity>
        </View>
    )
}
const CartList = (props) => {
    console.log("cartList ==========" + JSON.stringify(props.cartList))
    // const cartList = props.cartList;

    let [cartList, setCartList] = useState([...props.cartList])

    function removeItem(index){
        var list = props.cartList
        list.splice(index,1);
        const {dispatch} = props;

        dispatch({type:ActionTypes.CART_LIST,payload:list})
        setCartList([...list])
        console.log("------------"+JSON.stringify(cartList))


    }

    


    const [user, setUser] = React.useState(null);
    const isFocused = useIsFocused();

    // useFocusEffect(
    //   React.useCallback(() => {
    //     const unsubscribe = isFocused.subscribe(userId, user => setUser(data));
  
    //     return () => unsubscribe();
    //   }, [])
    // );








    // useEffect(()=>{
    //     setCartList(props.cartList)        
    //     console.log("------------"+props.cartList)
    // })

    return (
        <View style={styles.container}>
            {/* <CommonHeadr title={"CART"}/> */}
            {
                cartList.length > 0 ?
                    <View>
                    <ScrollView >{
                        cartList.map((item, index) => {
                          return  <RenderProductList item={item} index={index} removeItem={removeItem}/>
                        })
                    }
                        <PriceDetails />
                    </ScrollView>
                    <CheckOutButton />
                    </View>
                    :
                    <EmptyCart />
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
        backgroundColor: colors.white,
    },
});

//make this component available to the app
export default connect(mapStateToProps)(CartList)

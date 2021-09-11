//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import colors from '../utils/colors';
import Labels from '../utils/labels';
import theme from "../utils/theme";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { ActionTypes } from '../redux/action/actionList';
import { connect } from "react-redux";

const rupee = "₹"

const mapStateToProps = (state) => ({
    cartList: state.cartListReducer.cartList

});

// create a component
const ProductDetails = (props) => {
    var item = {}
    if (props && props.route && props.route.params && props.route.params.itemDetails) {
        item = props.route.params.itemDetails
    } else {
        item = {}
    }

    const [itemDetails, updateDetails] = useState(item)
    const [itemImages, setImages] = useState([])
    const [isAlreadyAvailable, setisAlreadyAvailable] = useState(false)
    const [indexValue, setindexValue] = useState("")
    const [showDescriptionFlag, updateDescription] = useState(false)
    const [selectedQuantity, updateQuantity] = useState("100 g")




    useEffect(() => {

        if (itemDetails.item_images.length > 0) {
            var image = []
            for (const obj of itemDetails.item_images) {
                image.push(obj.image)
            }
            setImages(image)
        }

        // console.log("props ---> " + JSON.stringify(props.route.params.itemDetails))
        if (props.cartList.length > 0) {
            for (let i = 0; i < props.cartList.length; i++) {
                if (props.cartList[i].item_code == itemDetails.item_code) {
                    setisAlreadyAvailable(true);
                    setindexValue(i)
                }
            }
        } else {
            setisAlreadyAvailable(false)
        }

    }, [])

    var types = [
        { label: "100 g" },
        // { label: "150 g" },
        { label: "250 g" },
        { label: "500 g" },
        { label: "1 kg" },
    ]

    return (
        <View style={{ flex: 1 }}>


            <ScrollView style={{ marginBottom: 60 }}>
                <SliderBox
                    backgroundColor={"white"}
                    images={itemImages}
                    sliderBoxHeight={250}
                    dotColor="white"

                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    dotStyle={{
                        width: 25,
                        height: 10,
                        borderRadius: 15,
                        marginHorizontal: 10,
                        padding: 0,
                        margin: 0
                    }}
                    ImageComponentStyle={{ height: 250, marginTop: 15, width: "65%" }}

                // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                />
                <View>
                    <Text style={[theme.cartProductDetails, { marginHorizontal: 15, marginVertical: 10 }]} numberOfLines={1}>{itemDetails.item_name}{"-"}{itemDetails.item_description}</Text>
                    <View style={{ borderBottomColor: "#888888", borderBottomWidth: 2, paddingBottom: 10 }}>
                        <View style={{ flexDirection: "row", marginHorizontal: 15, }}>


                            <Text style={theme.cartItemAmountDis}>{rupee}{" "}{itemDetails.price}</Text>
                            {
                                itemDetails.price == itemDetails.actual_price ? null :
                                    <Text style={theme.cartItemAmount} numberOfLines={2}>{rupee}{" "}{itemDetails.actual_price}</Text>
                            }
                            {
                                itemDetails.price == itemDetails.actual_price ? null :
                                    <Text style={[theme.cartItemAmountDis, { color: colors.successGreenColor }]}>{"  (You save "}{rupee}{" "}{parseFloat(itemDetails.actual_price) - parseFloat(itemDetails.price)}{")"}</Text>

                            }
                        </View>

                        {
                            itemDetails.item_code == "1623751411836110" ?
                                <View style={{ flexDirection: "row" }}>
                                    {
                                        types.map((item, index) => {
                                            return (
                                                <TouchableOpacity onPress={() => { updateQuantity(item.label) }} style={[theme.type, { backgroundColor: selectedQuantity == item.label ? colors.themeColor : colors.white }]}>
                                                    <Text style={{ fontWeight: "bold", color: selectedQuantity == item.label ? colors.white : colors.black }}>{item.label}</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }

                                </View>
                                : null
                        }

                    </View>

                </View>



                <View style={{}}>
                    <TouchableOpacity onPress={() => { updateDescription(!showDescriptionFlag) }} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={[theme.cartProductDetails, { marginHorizontal: 15, marginVertical: 10 }]} numberOfLines={1}>{Labels.description}</Text>
                        <Image source={require("../../assets/images/downIcon.png")} style={{ width: 20, height: 20, marginHorizontal: 15, marginVertical: 10, transform: [{ rotate: showDescriptionFlag ? '180deg' : '0deg' }] }} />
                    </TouchableOpacity>

                    <Text numberOfLines={showDescriptionFlag ? 20 : 2} style={[{ marginHorizontal: 15, marginVertical: 0, fontSize: 13 }]}>{itemDetails.item_details}</Text>
                </View>



            </ScrollView>
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <View>
                    <View style={[theme.checkOutButtonView]}>
                        <Icon name="shopping-cart" size={30} />
                        <TouchableOpacity style={theme.checkoutButton} onPress={() => {
                            if (isAlreadyAvailable) {
                                props.cartList.splice(indexValue, 1)
                            } else {
                                props.cartList.push(itemDetails);
                            }
                            const { dispatch } = props
                            dispatch({ type: ActionTypes.CART_LIST, payload: props.cartList })
                            if (props.cartList.length > 0) {
                                for (let i = 0; i < props.cartList.length; i++) {
                                    if (props.cartList[i].item_code == itemDetails.item_code) {
                                        setisAlreadyAvailable(true);
                                        setindexValue(i)
                                    }
                                }
                            } else {
                                setisAlreadyAvailable(false)
                            }

                        }}>
                            <Text style={theme.checkoutButtonText}>{
                                isAlreadyAvailable ?
                                    Labels.removeCard
                                    :
                                    Labels.addToCard}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



            {/* <View style={styles.container}>
                <SliderBox
                    images={itemImages}
                    sliderBoxHeight={400}
                    dotColor="white"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    dotStyle={{
                        width: 25,
                        height: 10,
                        borderRadius: 15,
                        marginHorizontal: 10,
                        padding: 0,
                        margin: 0
                    }}
                    ImageComponentStyle={{ height: 400, marginTop: 15, width: "95%" }}
                // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                />
                <Text style={[theme.cartProductDetails, { marginHorizontal: 15, marginVertical: 10 }]} numberOfLines={1}>{itemDetails.item_name}{"-"}{itemDetails.item_description}</Text>

                <View style={{ flexDirection: "row", marginHorizontal: 15, borderBottomColor: "#888888", borderBottomWidth: 2, paddingBottom: 10 }}>
                    <Text style={theme.cartItemAmountDis}>{rupee}{" "}{itemDetails.price}</Text>
                    {
                        itemDetails.price == itemDetails.actual_price ? null :
                            <Text style={theme.cartItemAmount} numberOfLines={2}>{rupee}{" "}{itemDetails.actual_price}</Text>
                    }
                    {
                        itemDetails.price == itemDetails.actual_price ? null :
                            <Text style={[theme.cartItemAmountDis, { color: colors.successGreenColor }]}>{"  (You save "}{rupee}{" "}{parseFloat(itemDetails.actual_price)-parseFloat(itemDetails.price)}{")"}</Text>

                    }
                </View>
            </View>
            <View style={theme.productDetailsDescription}>
                <Text style={[theme.cartProductDetails, { marginHorizontal: 15, marginVertical: 10 }]} numberOfLines={1}>{Labels.description}</Text>

                <ScrollView style={theme.productDescriptionScrollStyle}>
                    <Text style={[{ marginHorizontal: 15, marginVertical: 0, fontSize: 13 }]}>{itemDetails.item_details}</Text>
                </ScrollView>
            </View>

            <View style={theme.checkOutButtonView}>
                <Icon name="shopping-cart" size={30} />
                <TouchableOpacity style={theme.checkoutButton} onPress={()=>{
                    if(isAlreadyAvailable){
                        props.cartList.splice(indexValue,1)
                    }else{
                        props.cartList.push(itemDetails);
                    }
                    const {dispatch} = props
                    dispatch({type:ActionTypes.CART_LIST,payload:props.cartList})
                    if(props.cartList.length > 0 ){
                        for (let i = 0; i < props.cartList.length; i++) {
                            if(props.cartList[i].item_code == itemDetails.item_code){
                                setisAlreadyAvailable(true);
                                setindexValue(i)
                            }
                        }
                    }else{
                        setisAlreadyAvailable(false)
                    }

                }}>
                    <Text style={theme.checkoutButtonText}>{
                    isAlreadyAvailable ? 
                        Labels.removeCard
                    :
                    Labels.addToCard}</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    // container: {
    //     // flex: 1,
    //     // justifyContent: 'center',
    //     // alignItems: 'center',
    //     // backgroundColor: '#2c3e50',
    //     // marginHorizontal:15
    // },


});

//make this component available to the app
// export default ProductDetails;
export default connect(mapStateToProps)(ProductDetails)
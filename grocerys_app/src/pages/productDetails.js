//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import colors from '../utils/colors';
import Labels from '../utils/labels';
import theme from "../utils/theme";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const rupee = "₹"
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




    useEffect(() => {

        if (itemDetails.item_images.length > 0) {
            var image = []
            for (const obj of itemDetails.item_images) {
                image.push(obj.image)
            }
            setImages(image)
        }

        console.log("props ---> " + JSON.stringify(props.route.params.itemDetails))


    }, [])

    // const images = [
    //     "https://source.unsplash.com/1024x768/?nature",
    //     "https://source.unsplash.com/1024x768/?water",
    //     "https://source.unsplash.com/1024x768/?girl",
    //     "https://source.unsplash.com/1024x768/?tree", // Network image
    // ]
    return (
        <View>
            <View style={styles.container}>
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
                <TouchableOpacity style={theme.checkoutButton}>
                    <Text style={theme.checkoutButtonText}>{Labels.addToCard}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
        // marginHorizontal:15
    },
});

//make this component available to the app
export default ProductDetails;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import Labels from '../utils/labels';
import theme from '../utils/theme';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../utils/constants';


const sampleOrderList = [
    {
        order_id: "1010",
        order_place_date: "12 mar 2021 15:50",
        totala_amount: "140",
        order_status: "delivery",
        address: "2/178 ,dhasampalayam, mettupalayam, coimbatore",
        mobile_no: "83442337122",
        order_details: {
            cart_total_amount: "2000",
            cart_discount: "40",
            sub_total: "1960",
            delivery_charge: "40",
            total: "2000",
            payment_type: "COD",
            item_details: [
                {
                    image: "",
                    quantity: 5,
                    selling_price: 500,
                    category_code: 100,
                    item_code: 2000,
                    productDetails: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at",
                    product_description: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur"
                },
                {
                    image: "",
                    quantity: 5,
                    selling_price: 500,
                    category_code: 100,
                    item_code: 2000,
                    productDetails: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at",
                    product_description: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur"
                }
            ]
        }
    },
    {
        order_id: "1010",
        order_place_date: "12 mar 2021 15:50",
        totala_amount: "140",
        order_status: "delivery",
        address: "2/178 ,dhasampalayam, mettupalayam, coimbatore",
        mobile_no: "83442337122",
        order_details: {
            cart_total_amount: "2000",
            cart_discount: "40",
            sub_total: "1960",
            delivery_charge: "40",
            total: "2000",
            payment_type: "COD",
            item_details: [
                {
                    image: "",
                    quantity: 5,
                    selling_price: 500,
                    category_code: 100,
                    item_code: 2000,
                    productDetails: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at",
                    product_description: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur"
                },
                {
                    image: "",
                    quantity: 5,
                    selling_price: 500,
                    category_code: 100,
                    item_code: 2000,
                    productDetails: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at",
                    product_description: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur"
                }
            ]
        }
    },
    {
        order_id: "1010",
        order_place_date: "12 mar 2021 15:50",
        totala_amount: "140",
        order_status: "delivery",
        address: "2/178 ,dhasampalayam, mettupalayam, coimbatore",
        mobile_no: "83442337122",
        order_details: {
            cart_total_amount: "2000",
            cart_discount: "40",
            sub_total: "1960",
            delivery_charge: "40",
            total: "2000",
            payment_type: "COD",
            item_details: [
                {
                    image: "",
                    quantity: 5,
                    selling_price: 500,
                    category_code: 100,
                    item_code: 2000,
                    productDetails: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at",
                    product_description: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur"
                },
                {
                    image: "",
                    quantity: 5,
                    selling_price: 500,
                    category_code: 100,
                    item_code: 2000,
                    productDetails: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at",
                    product_description: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur"
                }
            ]
        }
    },
    {
        order_id: "1010",
        order_place_date: "12 mar 2021 15:50",
        totala_amount: "140",
        order_status: "delivery",
        address: "2/178 ,dhasampalayam, mettupalayam, coimbatore",
        mobile_no: "83442337122",
        order_details: {
            cart_total_amount: "2000",
            cart_discount: "40",
            sub_total: "1960",
            delivery_charge: "40",
            total: "2000",
            payment_type: "COD",
            item_details: [
                {
                    image: "",
                    quantity: 5,
                    selling_price: 500,
                    category_code: 100,
                    item_code: 2000,
                    productDetails: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at",
                    product_description: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur"
                },
                {
                    image: "",
                    quantity: 5,
                    selling_price: 500,
                    category_code: 100,
                    item_code: 2000,
                    productDetails: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at",
                    product_description: "Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur. Lorem ipsum dolor sit amet, et paulo ceteros eligendi sea, et mel velit saepe voluptua. Viris sanctus propriae ex mel, atqui senserit sea an. Eu diam vidisse sed. Nam zril essent dictas at, an duo graece invenire omittantur"
                }
            ]
        }
    },
]

const Orders = ({ item, index }) => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingVertical: 10, paddingHorizontal: 15, backgroundColor: colors.white, marginHorizontal: 10, marginVertical: 10, borderRadius: 4 }}>
            <View style={theme.orderListRow}>
                <Text style={theme.orderId}>{"#"}{item.order_id}</Text>
                <TouchableOpacity style={theme.detailsButton} onPress={() => { navigation.navigate(ScreenNames.OrderDetails) }}>
                    <Text style={theme.detailsLabelStyle}>{Labels.details}</Text>
                </TouchableOpacity>
            </View>
            <View style={theme.orderListRow}>
                <Text style={theme.orderListMediumText}>{Labels.orderPlaced}</Text>
                <Text style={theme.orderListMediumText}>{item.order_place_date}</Text>
            </View>
            <View style={theme.orderListRow}>
                <Text style={theme.orderListMediumText}>{Labels.total}</Text>
                <Text style={theme.orderListMediumText}>{item.totala_amount}</Text>
            </View>

            <View style={[theme.orderListStatusRow, { borderTopColor: "#888888", borderTopWidth: 0.5, paddingTop: 10 }]}>
                <Text style={[theme.orderListMediumText, { flex: 0.7 }]}>{Labels.status}</Text>
                <Text style={[theme.orderListStatusText, { flex: 0.3 }]}>{item.order_status}</Text>
            </View>
            <View style={theme.orderListStatusRow}>
                <Text style={[theme.orderListMediumText, { flex: 0.7 }]}>{item.address}</Text>
            </View>
            <View style={[theme.orderListStatusRow, { justifyContent: "space-between", marginVertical: 10 }]}>
                <TouchableOpacity style={theme.buttonStyle}>
                    <Text style={theme.buttonTextStyle}>{Labels.cancel}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={theme.buttonStyle}>
                    <Text style={theme.buttonTextStyle}>{Labels.track}</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

// create a component
const OrderList = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    sampleOrderList.map((item, index) => {

                        return <Orders item={item} index={index} />

                        // Orders(item,index)
                    })
                }
            </ScrollView>
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
export default OrderList;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../utils/constants';
import { connect } from "react-redux";
import { ActionTypes } from '../redux/action/actionList';
import colors from '../utils/colors';

const mapStateToProps = (state) => ({
    selectedFooter: state.footerReducer.selectedFooter,
    cartList: state.cartListReducer.cartList
});

// create a component
const CommonFooter = (props) => {
    const navigation = useNavigation();
    const footerOptions = [
        { label: "Home", icon: "home", screen: ScreenNames.DashBoardPage },
        { label: "Category", icon: "th-large", screen: ScreenNames.Categorys },
        { label: "Cart", icon: "shopping-cart", screen: ScreenNames.Cart },
        { label: "Profile", icon: "user", screen: ScreenNames.Profile },
    ]

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", height: 60 }}>
                {
                    footerOptions.map((option, index) => {
                        return (
                            <View key={index} style={{ justifyContent: "center",}}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate(option.screen)
                                const { dispatch } = props
                                dispatch({ type: ActionTypes.SELECTED_FOOTER, payload: option.label })
                            }} style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 30 }}>
                                
                                <Icon color={props.selectedFooter == option.label ? colors.black : "grey"} name={option.icon} size={25} />
                                {
                                    props.selectedFooter == option.label ?
                                        <Text style={{ fontWeight: "bold" }}>{option.label}</Text> : null
                                }
                            </TouchableOpacity>
                            {
                                    option.label == "Cart" ?
                                        <View style={{position:"absolute",backgroundColor: "#FC6767", height: 20, width: 20, borderRadius: 50 }}>
                                            <Text style={{ color: colors.white, textAlign: "center" }}>{props.cartList.length}</Text>
                                        </View>
                                        : null
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
        // flex: 1,
        backgroundColor: colors.footerBackground,
        // backgroundColor:"#E0DEDE",
    },
});

//make this component available to the app
export default connect(mapStateToProps)(CommonFooter)

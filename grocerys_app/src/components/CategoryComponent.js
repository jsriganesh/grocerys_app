//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView,FlatList, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import theme from '../utils/theme';

// create a component

const Category = () => {
    return (
        <View style={{ width: 95, marginVertical: 10, alignItems: "center" }}>
            <View style={theme.categorySmallcontainer}>
                <Image style={theme.categoryImage} source={require("../../assets/images/cat.png")} />
            </View>
            <Text numberOfLines={1} style={theme.categoryName}>{"cat egory name "}</Text>
        </View>
    )
}

const BoxCategory = (props) => {
    return (
        <View style={{ 
            marginVertical: 5,
            shadowRadius: 4,
            shadowOffset: {
                width: 4,
                height: -4,
            },
            shadowColor: "#000000",
            elevation: 4,
            height:180, width: 120,
            paddingHorizontal:5,
            paddingVertical:5,
            backgroundColor:colors.white,
        justifyContent: "center", borderRadius: 5,
        }}>
            <TouchableOpacity>
            <View style={theme.boxCategorycontainer}>
                {/* <Image resizeMode={"cover"} style={theme.boxCategoryImage} source={require("../../assets/images/cat.png")} /> */}
                <Image resizeMode={"cover"} style={theme.boxCategoryImage} source={props.image} />
            </View>
            </TouchableOpacity>
            <Text numberOfLines={2} style={theme.categoryName}>{"category name "}</Text>
        </View>
    )
}

export const CategoryComponent = () => {
    return (
        <View>
        <ScrollView horizontal={true} style={{ marginVertical: 10,height:70}}>
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            {/* <Category />
            <Category />
            <Category />
            <Category />
            <Category /> */}
        </ScrollView>
        </View>
    );
};




export const CategoryList = (props) => {
    // console.log(props.height)
    return (
        <ScrollView horizontal={false} style={{ marginHorizontal:5 ,marginVertical:10,paddingBottom:20 
        // ,height:props.heights
        }}>
            <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}}>
            <BoxCategory  image={require('../../assets/images/cat1.jpeg')} />
            <BoxCategory  image={require('../../assets/images/cat2.png')} />
            <BoxCategory  image={require('../../assets/images/cat3.png')} />
            <BoxCategory  image={require('../../assets/images/cat.png')} />
            <BoxCategory  image={require('../../assets/images/cat1.jpeg')} />
            <BoxCategory  image={require('../../assets/images/cat2.png')} />
            <BoxCategory  image={require('../../assets/images/cat3.png')} />
            <BoxCategory  image={require('../../assets/images/cat.png')} />
            <BoxCategory  image={require('../../assets/images/cat1.jpeg')} />
            <BoxCategory  image={require('../../assets/images/cat2.png')} />
            <BoxCategory  image={require('../../assets/images/cat3.png')} />
            <BoxCategory  image={require('../../assets/images/cat.png')} />
            <BoxCategory  image={require('../../assets/images/cat2.png')} />
            <BoxCategory  image={require('../../assets/images/cat3.png')} />
            <BoxCategory  image={require('../../assets/images/cat.png')} />

            <BoxCategory  image={require('../../assets/images/cat2.png')} />
            <BoxCategory  image={require('../../assets/images/cat3.png')} />
            <BoxCategory  image={require('../../assets/images/cat.png')} />



            
            </View>
           
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    // categorySmallcontainer: {
    //     justifyContent: "center", alignItems: "center", borderRadius: 60,
    //     width: 80,
    //     height: 80,
    //     shadowRadius: 4,
    //     shadowOffset: {
    //         width: 4,
    //         height: -4,
    //     },
    //     shadowColor: "#000000",
    //     elevation: 4,

    //     // flex: 1,
    //     // justifyContent: 'center',
    //     // alignItems: 'center',

    //     backgroundColor: '#2c3e50',
    // },
});

//make this component available to the app


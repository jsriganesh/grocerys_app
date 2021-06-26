//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SearchIcon from 'react-native-vector-icons/dist/FontAwesome';
import colors from '../utils/colors';
import theme from '../utils/theme';
import labels from '../utils/labels';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../utils/constants"

// create a component
const SearchButton = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=>{navigation.navigate(ScreenNames.SearchProducts)}} style={theme.searchButtonStyle}>
            <SearchIcon name="search"  size={18} color={colors.white}/>
            <Text style={theme.searchFontText}>{labels.ProductSearchText}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SearchButton;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommonFooter from "../components/CommonFooter"

// create a component
const Categorys = () => {
    return (
        <View style={styles.container}>
            <CommonFooter/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Categorys;

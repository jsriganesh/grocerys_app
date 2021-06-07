//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Constants} from "./src/utils/constants"
import Dashboard from "./src/pages/dashboard"

// create a component

const AppStackNavigator = createStackNavigator();
// const drawerAutoCyclicTimerNavigator = createDrawerNavigator();

const AppNavigator=() =>{
    return (
        <AppStackNavigator.Navigator
        // it will be remove the default header 
        screenOptions={{  
            headerShown: false
          }}
        // it will be remove     the default header 

        >
          <AppStackNavigator.Screen name={Constants.DashBoardPage} component={Dashboard} />

        </AppStackNavigator.Navigator>
    );  
  }

const RootNavigation = () => {
    return (
        <NavigationContainer>
        <AppNavigator/>
        </NavigationContainer>
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
export default RootNavigation;


// Navigation types 
// navigation.navigate("home")   page navigation 
// navigation.push("home")  push the page 
// navigation.goBack("")  previous screen
// navigation.popToTop("") go to first page 
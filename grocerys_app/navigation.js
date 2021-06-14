//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import {Constants} from "./src/utils/constants"
import Dashboard from "./src/pages/dashboard"
import BottomNavigation from "./src/components/BottomNavigation"
import SearchProducts from "./src/pages/searchProducts"
import SearchButton from "./src/components/searchButton"
import colors from './src/utils/colors';



// create a component

const AppStackNavigator = createStackNavigator();

const AppNavigator=() =>{
    return (
        <AppStackNavigator.Navigator
        // it will be remove the default header 
        screenOptions={{  
            headerShown: false
          }}
        // it will be remove     the default header 

        >

         
          
          <AppStackNavigator.Screen name={"BottomNavigation"} component={BottomNavigation} />
          <AppStackNavigator.Screen name={"SearchProducts"} component={SearchProducts} />
          <AppStackNavigator.Screen name={"SearchButton"} component={SearchButton} />
          <AppStackNavigator.Screen name={Constants.DashBoardPage} component={Dashboard} />


        </AppStackNavigator.Navigator>
    );  
  }






const RootNavigation = () => {
    return (
        <NavigationContainer>
          <StatusBar backgroundColor={colors.themeColor}
                barStyle="light-content"/>
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
//import liraries
import React, { Component,useState } from 'react';
import {
  View, Text, StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,


} from 'react-native';
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

import Bottomnavigation from "../components/BottomNavigation";
import LinearGradient from 'react-native-linear-gradient';
import theme from "../utils/theme"

import SearchButton from '../components/searchButton';
import colors from '../utils/colors';
import Labels from '../utils/labels';



const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 6);



const _renderItem = (props)=>{
  return (

<View style={styles.itemContainer}>
        <Image source={props.item.image} resizeMode={"cover"} style={{height:ITEM_HEIGHT-5,width:ITEM_WIDTH-5}}/>
      </View>


  );
}

const Dashboard = (props) => {

  const[index,updateIndex]=useState(0);

  const DATA = [
    {image:require("../../assets/images/banner_image_1.png")},
    {image:require("../../assets/images/banner_image_2.png")},
    {image:require("../../assets/images/banner_image_3.png")},
    // 1,2,3,4,5
  ]

  


  return (
    <LinearGradient
      colors={[colors.themeColor, '#FFFFFF']}
      style={theme.linearGradient}
    >
      <View style={styles.dashboardSearchAndAppName}>
        <Text style={styles.appNameStyle}>{Labels.AppName}</Text>
      <SearchButton navigation={props.navigation}/>
      </View>
      <View>
        <Carousel
          layout={'default'} 
          data={DATA}
          renderItem={_renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          // containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) =>updateIndex(index)}
          useScrollView={true}          
        />
      </View>
      
      </LinearGradient>
  )
}


// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemContainer: {
    borderRadius:5,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  dashboardSearchAndAppName:{
    marginVertical:15,
    flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:15
  },
  appNameStyle:{
    fontSize:18,fontWeight:"500",color:colors.white
  }
});


//make this component available to the app
export default Dashboard;

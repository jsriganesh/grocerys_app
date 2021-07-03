//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, FlatList,ScrollView } from 'react-native';
import { colors, SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from "../utils/constants"

import { Button, Card, Title, Paragraph } from 'react-native-paper';
import theme from '../utils/theme';

var mockItems = require("../../mock_data/items_mock_data.json")

const deviceWidth = Dimensions.get('screen').width

const WithoutRibbon=({item, inde})=>{
    const navigation = useNavigation()
    return(    
        <TouchableOpacity onPress={()=>{ navigation.navigate(ScreenNames.ProductDetails,{itemDetails: item})}} style={styles.cardView} >
        <Card style={styles.cardSize}>
            <Image
                style={styles.imageView}
                source={{ uri: item.item_images[0].image }}
            />
            <Card.Content>
                <Text style={styles.detailsText} numberOfLines={2}>
                    {item.item_name}{"-"}{item.item_description}
                </Text>
            </Card.Content>
        </Card>
    </TouchableOpacity>
    )
}

const WithRibbon=({item, index})=>{
    return(    
        
        
        <View
          style={{
            flex: 1,
            backgroundColor: "green",
          }}
        />
    )
}


// create a component
const SearchProducts = (props) => {
    const [cardDetails, SetCardDetails] = useState(mockItems)
    const navigation = useNavigation()

    const renderData = (item, index) => {

        return <WithoutRibbon item={item} index={index}/>
    }
    return (
        <View style={styles.container}>
             
            <View style={theme.searchContainer}>
                <SearchBar
                    placeholder="Type Here..."
                    // round={true}
                    containerStyle={styles.searchBarContainerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                // onChangeText={search => {this.setState({search})
                // this.filterAddressBook(search)}}
                // value={this.state.search}
                />
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                   <Image source={require("../../assets/images/close.png")} style={theme.searchScreenCloseIcons}/>
                </TouchableOpacity>
            </View>

            
            <View>
                    <FlatList
                        data={cardDetails}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={true}
                        numColumns={2}
                        style={{ marginBottom: 50 }}
                        renderItem={({ item, index }) => renderData(item, index)}
                    />
          
            </View>
            
     </View>
    );
};



// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBarContainerStyle: {
        height: 60,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        backgroundColor: "transparent",
        width: deviceWidth-50,
    },
    inputContainerStyle: { backgroundColor: colors.white},
    inputStyle: {
        fontSize: 14,
        color: "black"
    },
    cardView: { padding: 8, },
    cardSize: { width: deviceWidth/2 - 20, 
        // height: 190
     },
    imageView: { width: 125, height: 125, resizeMode: "stretch",alignSelf:"center" },
    detailsText:{
        fontSize:15,fontWeight:"700"
    }
});

//make this component available to the app
export default SearchProducts;

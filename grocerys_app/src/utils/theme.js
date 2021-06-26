import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height
export default theme = StyleSheet.create({
  footerStyle: {
    //   paddingHorizontal:10,
    //   position: 'absolute', //Here is the trick
    //   bottom: 0, //Here is the trick
    //   width: '100%',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowColor: '#000000',
    elevation: 4,

    // flexDirection:"row",justifyContent:"space-between",backgroundColor:Colors.footerBackground,height:60,alignItems:"center"
  },
  linearGradient: {
    height: deviceHeight - 60
  },

  searchButtonStyle: {
    marginVertical: 10,
    flexDirection: "row", alignItems: "center", width: deviceWidth / 1.5,
    borderRadius: 30, borderWidth: 0.5, borderColor: colors.white,
    paddingVertical: 8, paddingLeft: 10
  },
  searchFontText: {
    marginLeft: 10,
    color: colors.white,
    fontSize: 13
  },
  renderProductList: {

    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: -4,
    },
    shadowColor: "#000000",
    elevation: 4,

    backgroundColor: colors.white, marginVertical: 10, marginHorizontal: 5, borderRadius: 4
  },
  cartItems: {
    flexDirection: "row", marginHorizontal: 5, marginVertical: 5
  },
  cartImage: {
    height: 70, width: 60, borderRadius: 5, flex: 0.2
  },
  cartDetails: {
    flex: 0.8, justifyContent: "space-between", paddingVertical: 5
  },
  cartProductDetails: {
    fontSize: 15, fontWeight: "bold"
  },
  cartItemAmountView: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 15
  },
  cartItemAmountDis: {
    fontSize: 15, fontWeight: "bold", color: colors.themeColor
  },
  cartItemAmount: {
    fontSize: 15, fontWeight: "400", color: colors.actualPriceColor, marginLeft: 15, textDecorationLine: "line-through"
  },
  cartItemQuantity:{ 
    borderRadius: 6, borderColor: colors.themeColor, borderWidth: 1, flexDirection: "row" 
  },
  cartItemQuantityMinus:{
   borderRightColor: colors.themeColor, borderRightWidth: 1, justifyContent: "center", paddingVertical: 5, paddingHorizontal: 5 
  },
  cartItemQuantityTextBox:{
    height: 30, width: 30, color: colors.themeColor, padding: 0, textAlign: "center" 
  },
  cartItemQuantityPlus:{
    borderLeftColor: colors.themeColor, borderLeftWidth: 1, justifyContent: "center", paddingVertical: 5, paddingHorizontal: 5
  },
  removeCartItem:{ 
    paddingHorizontal: 15, flexDirection: "row", borderTopColor: "#888888", borderTopWidth: 0.5, justifyContent: "space-between", alignItems: "center" 
  },
  removeText:{
    fontSize: 15, fontWeight: "bold", marginVertical: 10 
  },
  cartItemTotalAmount:{ 
    fontSize: 15, fontWeight: "bold", color: colors.themeColor 
  },
  checkOutButtonView:{
    flexDirection:"row",marginHorizontal:15,justifyContent:"space-between",alignItems:"center"
  },
  mediumText:{
    fontSize: 17, fontWeight: "bold", marginVertical: 10
  },
  checkoutButton:{
    backgroundColor:colors.themeColor,borderRadius:4,
    height:50,width:150,justifyContent:"center",alignItems:"center"
  },
  checkoutButtonText:{
    fontSize:15,fontWeight:"bold",color:colors.white
  },
  productDetailsDescription:{
        height:deviceHeight-590
  },
  productDescriptionScrollStyle:{
    height:deviceHeight
  },
  addressDetails:{
    fontSize:15
  },
  profileOptions:{
    flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,paddingVertical:15,borderBottomWidth:0.7,borderBottomColor:"#888888"
  },
  orderId:{
    fontSize:15,
    fontWeight:"bold"
  },
  orderListMediumText:{
    fontSize:15,
  },
  orderListRow:{
    marginVertical:5,
    flexDirection:"row",
    justifyContent:"space-between",alignItems:"center"
  },
  orderListStatusRow:{
    marginVertical:5,
    flexDirection:"row",
  },
  detailsButton:{
    paddingHorizontal:15,paddingVertical:7,borderRadius:20,borderWidth:0.5,borderColor:"#888888"
  },
  detailsLabelStyle:{
    fontSize:15,color:"#888888"
  },
  orderListStatusText:{
    textAlign:"right",
    alignSelf:"center",
    fontSize:17,
    fontWeight:"bold",
    color:colors.themeColor,
  },
  buttonTextStyle:{
    fontWeight:"bold",fontSize:15,color:colors.white
  },
  buttonStyle:{
    backgroundColor:colors.themeColor,paddingVertical:10,paddingHorizontal:35,borderRadius:5
  },
  paymentMethodButtonView:{
    backgroundColor:"#F7F5F3",
    borderRadius:7,borderWidth:1,borderColor:"#F1F0EE",
    paddingVertical:5,paddingHorizontal:10,flexDirection:"row",justifyContent:"space-between"
  },
  paymentMethodButtonText:{ 
    fontSize: 16, fontWeight: "bold", marginVertical: 10,color:colors.themeColor 
  },
  orderDetailsCardView:{
    marginVertical:5,paddingHorizontal:10,borderRadius:5,paddingVertical:10,backgroundColor:colors.white
  },

  orderListProductImage: {
    height: 90, width: 70, borderRadius: 5, flex: 0.3
  },
  orderDetailsNormalText:{
    fontSize:15,
    color:"#888888",
    fontWeight:"bold"
  },
  categoryImage:{
    backgroundColor:colors.themeColor,
    height:58,width:53
  },
  categoryName:{
    fontSize:15,fontWeight:"bold",color:"#605F5F",
  },
  categorySmallcontainer: {
    justifyContent: "center", alignItems: "center", borderRadius: 60,
    width: 80,
    height: 80,
    shadowRadius: 4,
    shadowOffset: {
        width: 4,
        height: -4,
    },
    shadowColor: "#000000",
    elevation: 4,
    
    // backgroundColor: '#2c3e50',
    backgroundColor: '#DFF0ED',
},

boxCategorycontainer: {
  // justifyContent: "center", alignItems: "center", borderRadius: 5,
  width: 100,
  height: 160,
  // shadowRadius: 4,
  // shadowOffset: {
  //     width: 4,
  //     height: -4,
  // },
  // shadowColor: "#000000",
  // elevation: 4,
  
  // backgroundColor: '#2c3e50',
  backgroundColor: '#DFF0ED',
},

boxCategoryImage:{
  backgroundColor:colors.white,
    height:160,width:100
}

})
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
  }
})
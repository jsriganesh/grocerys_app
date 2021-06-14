import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Colors from "../utils/colors"
import theme from "../utils/theme"

import { BottomNavigation, Text, Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import colors from '../utils/colors';
// import { Constants } from "../utils/constants";
import Categorys from "../pages/categorys"
import Dashboard from "../pages/dashboard"
import CartList from "../pages/cartList"
import ProductDetails from "../pages/productDetails"
import CheckoutDetails from "../pages/checkoutDetails"
import Profile from "../pages/profile"
import OrderList from "../pages/orderList"
import OrderDetails from "../pages/orderDetails"


const cartList = () => <CartList />;
const categorys = () => <Categorys />;
const dashboard = (props) => <Dashboard navigation={props.navigation} />;
const profile = () => <Profile/>;

const Bottomnavigation = (props) => {

  const [index, setIndex] = React.useState(0);


  const [routes] = React.useState([

    { key: 'dashBoard', title: 'Home', icon: 'home' },

    { key: 'categorys', title: 'Categorys', icon: 'cart' },

    {
      key: 'cart', title: 'Cart', icon: (props) => {
        return (

          <View style={{ flexDirection: "row" }}>
            <View>
              <Icon color={props.color} name="shopping-cart" size={25} />
            </View>
            <View style={{ position: 'absolute', marginLeft: 15 }}>
              <Badge >55</Badge>
            </View>
          </View>
        )
      }
    },
    { key: 'profile', title: 'Profile', icon: 'cart' },
    // { key: 'recents', title: 'Recents', icon: 'cart' },
  ]);



  console.log("index" + index)

  const renderScene = BottomNavigation.SceneMap({
    // music: MusicRoute,
    cart: cartList,
    categorys: categorys,
    dashBoard:dashboard,
    profile:profile,
  });

  // const renderScene = ({ route, jumpTo,navigation }) => {
  //   switch (route.key) {
  //     case 'cart':
  //       return <CartList jumpTo={jumpTo} />;
  //     case 'categorys':
  //       return <Categorys jumpTo={jumpTo} />;
  //     case 'dashBoard':
  //       return <Dashboard navigation={navigation} jumpTo={jumpTo} />;
  //     case 'profile':
  //       return <Profile jumpTo={jumpTo} />;
  //   }
  // }


  return (
    <BottomNavigation
      {...props}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: colors.footerBackground, height: 60 }}
    />
  );
};

export default Bottomnavigation;

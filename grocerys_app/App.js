/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import RootNavigation from './navigation'
import 'react-native-gesture-handler'
import store from "./src/redux/store/reduxStore";
import {Provider} from 'react-redux'

class App extends React.Component{

  render(){
  return (
    <Provider store={store}>
      <RootNavigation/>
      </Provider>
  );
}
}

export default App;

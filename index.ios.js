/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
// import App from './LoginView'
// import ScrollViewTest from './styleComponent/SectionListTest'
// import TarBarIOSTest from './styleComponent/TarBarIOSTest'
import App from './App'
export default class MyApp extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import NiceLoyout from './styleComponent/NiceLoyout'
export default class MyApp extends Component {
  render() {
    return (
      <NiceLoyout />
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);

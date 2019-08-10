/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          // value="默认文字"
          //调用键盘的类型，number-pad是数字键盘
          keyboardType={"number-pad"}
          //可以输入多行，密码框下设置会使密码框失效
          // multiline={true}

          //密码
          // password={true}

          //占位文字
          // placeholder="我是占位文字"

          //显示清除按钮
          clearButtonMode={"always"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: "row",
    justifyContent: "center",
  },
  textInput: {

    marginTop: 30,
    width: 300,
    height: 60,
    //添加边框
    borderWidth: 1,
    borderColor: 'black'
  }
});

AppRegistry.registerComponent('MyApp', () => MyApp);

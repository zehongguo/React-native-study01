/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image
} from 'react-native'

export default class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./static/img/img.png')}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            marginTop: 100,
            marginBottom: 25
          }}
        />
        <TextInput
          placeholder="账号"
          style={styles.loginInput}
        />
        <TextInput
          placeholder="密码"
          password={true}
          style={styles.loginInput}
        />
        <View
          style={styles.loginButton}
        >
          <Text>登录</Text>
        </View>
        <View
          style={styles.loginSetting}
        >
          <Text>无法登陆?</Text>
          <Text>忘记密码</Text>
        </View>
        <View style={styles.loginOther}>
          <Text>其他登录方式:</Text>
          <Image
            source={require('./static/img/img.png')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              marginLeft: 10
            }} />
          <Image
            source={require('./static/img/img.png')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              marginLeft: 10
            }} />
          <Image
            source={require('./static/img/img.png')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              marginLeft: 10
            }} />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: "center",
  },
  loginInput: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    textAlign: "center",
    marginTop: 1
  },
  loginButton: {
    width: "90%",
    height: 40,
    backgroundColor: "#5687",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10
  },
  loginSetting: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  loginOther: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 10,
  }
});


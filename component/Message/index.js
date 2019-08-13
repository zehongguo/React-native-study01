import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>消息</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({

})
export default Message;
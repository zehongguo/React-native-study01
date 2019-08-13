import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  AlertIOS
} from 'react-native';
import data from '../jsonData/shareData.json'
import Dimensions from 'Dimensions'
const { width: srceenWidth } = Dimensions.get("window")

class NiceLoyout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: data.data
    }
  }
  render() {
    return (
      <FlatList
        //设置内容的样式
        contentContainerStyle={styles.FlatListStyle} //设置内容的样式
        data={this.state.dataSource}//
        renderItem={this.renderShareItem}//渲染子元素
        bounces={false}//达到末尾是否可以弹性拉一小截
        showsVerticalScrollIndicator={false}
        keyExtractor={this.keyExtractor}//用于添加元素key值
      />
    );
  }
  //为每个元素加上key
  keyExtractor = (item, index) => {
    return "index" + item.title + index
  }
  renderShareItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => AlertIOS.alert("正在跳转...")}
      >
        <View style={styles.ShareItemStyle}>
          <Image source={{ uri: item.icon }} style={styles.shareImage} />
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

//计算间距
let cols = 3;
const vWidth = 100 * 0.9;
const vMargin = (srceenWidth - vWidth * cols) / (cols + 1);

const styles = StyleSheet.create({
  FlatListStyle: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  shareImage: {
    width: 80,
    height: 80
  },
  ShareItemStyle: {
    width: vWidth,
    height: vWidth,
    marginLeft: vMargin,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30
  }
})
export default NiceLoyout;
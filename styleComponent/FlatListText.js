import React, { Component, PureComponent } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  AlertIOS,
} from 'react-native'
import data from '../jsonData/Wine.json'
import Dimensions from 'Dimensions'
const { width: screenWidth } = Dimensions.get('window')
export default class FlatListText extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: data
    }
  }
  renderFlatList = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => AlertIOS.alert("恭喜你，购买成功")}
      >
        <View style={styles.cellWineStyle} >
          {/* 左边的图片 */}
          <Image
            source={{ uri: item.image }}
            style={styles.wineImageStyle}
          />
          {/* 右边的信息描述 */}
          <View style={styles.descWineStyle} >
            <Text
              style={{
                marginBottom: 18,
                fontSize: 16
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                color: "red"
              }}>
              ￥{item.money}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  _separator() {
    return <View style={{ height: 0.4, backgroundColor: '#999999' }} />;
  }
  _extraUniqueKey(item, index) {
    return "index" + index + item.name;
  }
  render() {
    return (
      <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}//滚动的时候不显示滚动条
        data={this.state.dataSource}//数据源
        renderItem={this.renderFlatList}//渲染将数据源的数据
        ItemSeparatorComponent={this._separator}//每个元素的设置分割线
        keyExtractor={this._extraUniqueKey}//为每个元素添加key值，在渲染内容加会产生警告，所以需要在这里加
      />
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  cellWineStyle: {
    flexDirection: "row",
    alignItems: "center",
    // borderBottomWidth: 0.4,
    // borderBottomColor: "#dedede",
  },
  wineImageStyle: {
    width: 70,
    height: 70,
    margin: 20
  },
  descWineStyle: {
    width: screenWidth * 0.7
  }

})
/* 
注意是TabBarIOS.Item，不是TabBarIOSItem

*/

import React, { Component } from 'react';
import {
  View,
  Text,
  TabBarIOS,
  StyleSheet
} from 'react-native';

class TarBarIOSTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedByName: "contacts"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={
          styles.topTitleStyle
        }>
          <Text style={{ fontSize: 20 }}>TabBarIOS</Text>
        </View>
        <TabBarIOS
          barTintColor="white"//下面选项卡的背景颜色
          tintColor="#448AFF"//选项卡图标的颜色
          translucent={false}//一个布尔值，指示标签栏是否为半透明
        >
          <TabBarIOS.Item
            badge={4}//徽章
            systemIcon="contacts"//系统图标
            selected={this.state.selectedByName === "contacts"}//是否选中
            onPress={() => { this.setState({ selectedByName: "contacts" }) }}//按下触发的事件
          >
            <View
              style={[styles.tabBarItemStyle, { backgroundColor: "#66CCCC" }]}
            >
            </View>

          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="recents"
            selected={this.state.selectedByName === "recents"}
            onPress={() => { this.setState({ selectedByName: "recents" }) }}
          >
            <View
              style={[styles.tabBarItemStyle, { backgroundColor: "#3399CC" }]}
            >
            </View>

          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="search"
            selected={this.state.selectedByName === "search"}
            onPress={() => { this.setState({ selectedByName: "search" }) }}
          >
            <View
              style={[styles.tabBarItemStyle, { backgroundColor: "#666699" }]}
            >
            </View>

          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="more"
            selected={this.state.selectedByName === "more"}
            onPress={() => { this.setState({ selectedByName: "more" }) }}
          >
            <View
              style={[styles.tabBarItemStyle, { backgroundColor: "#CC9933" }]}
            >
            </View>

          </TabBarIOS.Item>

        </TabBarIOS>

      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topTitleStyle: {
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BDBDBD"
  },
  tabBarItemStyle: {
    flex: 1,
  },

})

export default TarBarIOSTest;
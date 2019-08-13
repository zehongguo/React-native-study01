import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  NavigatorIOS,
  TabBarIOS,
  StyleSheet
} from 'react-native';
import {
  Home,
  Find,
  Message,
  Mine
} from './component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedByName: "Home"
    };
  }
  changePage = () => {
    this.setState({
      selectedByName: "Find"
    })
  }
  render() {
    return (
      <TabBarIOS
        unselectedItemTintColor="#000000"
        barTintColor="#0099CC"
        tintColor="white"
      >
        <TabBarIOS.Item
          icon={require('./static/newsImage/TabBar/tabbar_home@2x.png')}
          title="首页"
          selected={this.state.selectedByName === "Home"}
          onPress={() => { this.setState({ selectedByName: "Home" }) }}
        >
          <NavigatorIOS
            initialRoute={{
              title: "首页",
              titleTextColor: "white",
              component: Home,
              barTintColor: "#0099CC",
              tintColor: "white",
              leftButtonIcon: require("./static/newsImage/NavigationBar/navigationbar_friendattention_highlighted@2x.png"),
              rightButtonIcon: require("./static/newsImage/NavigationBar/navigationbar_pop_highlighted@2x.png")
            }}
            navigationBarHidden={false}//是否隐藏导航栏
            translucent={false}
            style={{ flex: 1 }}
            // barTintColor="red"//导航栏背景色
            // barStyle='blue'
            titleTextColor="#0099CC"
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./static/newsImage/TabBar/tabbar_discover@2x.png')}
          title="发现"
          selected={this.state.selectedByName === "Find"}
          onPress={() => (this.changePage())}
        >
          <NavigatorIOS
            initialRoute={{
              title: "发现",
              component: Find
            }}
            style={{ flex: 1 }}
            titleTextColor="#0099CC"
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./static/newsImage/TabBar/tabbar_message_center@2x.png')}
          title="消息"
          selected={this.state.selectedByName === "Message"}
          onPress={() => { this.setState({ selectedByName: "Message" }) }}
        >
          <NavigatorIOS
            initialRoute={{
              title: "消息",
              component: Message
            }}
            titleTextColor="#0099CC"
          />

        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./static/newsImage/TabBar/tabbar_profile@2x.png')}
          title="我的"
          selected={this.state.selectedByName === "Mine"}
          onPress={() => { this.setState({ selectedByName: "Mine" }) }}
          badge={4}
        >
          <NavigatorIOS
            initialRoute={{
              title: "我的",
              component: Mine
            }}
            titleTextColor="#0099CC"
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


const styles = StyleSheet.create({

})
export default App;
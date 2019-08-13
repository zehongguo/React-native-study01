import React, { Component } from 'react'
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'
import Dimensions from 'Dimensions'
import TimerMixin from 'react-timer-mixin'
const { width: srceenWidth } = Dimensions.get('window');
export default class ScrollViewTest extends Component {
  constructor() {
    super();
    mixins = [TimerMixin],
      this.state = {
        currentPage: 0,
      }
  }

  componentDidMount() {
    this.startInterval();
  }
  //组件卸载清除定时器
  componentWillUnmount() {
    clearInterval(this.Timer);
  }
  //定时器
  startInterval = () => {
    var currentPage;
    this.Timer = setInterval(() => {
      //求出当前页，并+1，如果在最后一张，重新返回到第一张
      if (this.state.currentPage + 1 == this.props.dataSource.length) {
        currentPage = 0
      } else {
        currentPage = this.state.currentPage + 1
      }
      this.setState({
        currentPage
      })
      //获取ScrollView的真实节点,并改变他的偏移量,
      this.refs.scorllViewRef.scrollTo({
        x: currentPage * srceenWidth,
        y: 0,
        animated: true,
      })
    }, 2000)
  }
  //渲然ScrollView的内容
  renderView = () => {
    return this.props.dataSource.map((item) => {
      return (
        <View
          key={item.image}
          style={{
            width: srceenWidth,
            height: 150,
            alignItems: "center"
          }}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: "100%",
              height: "100%",
            }} />
          <Text
            style={{
              position: "absolute",
              bottom: 25,
              backgroundColor: "rgba(0,0,0,0)",
              fontSize: 18,
              fontWeight: "600",
              color: "white"
            }}
          >
            {item.title}
          </Text>
        </View >
      )
    }
    )
  }


  renderIndicator = () => {
    let indicattors = [];
    for (let i = 0; i < this.props.dataSource.length; i++) {
      indicattors.push(
        <Text
          key={i}
          style={{ fontSize: 25, marginLeft: 10, color: this.state.currentPage === i ? "black" : "white" }}
        >&bull;
        </Text>
      )
    }
    return indicattors;
  }


  //滚动完一帧更改圆点的颜色
  changeIndicator = (e) => {
    //获取ScrollView的偏移量
    let offsetX = e.nativeEvent.contentOffset.x;
    this.setState({
      currentPage: offsetX / srceenWidth,
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref="scorllViewRef"
          horizontal={true}//为true时为子视图在水平方向
          // bounces={false}//达到末尾是否可以弹性拉一小截
          keyboardDismissMode={"on-drag"}//滑动时是否隐藏键盘
          pagingEnabled={true}//拖动一整页,默认为false
          // scrollEnabled={false}//禁止拖动
          showsHorizontalScrollIndicator={false}//不显示水平滚动条
          onMomentumScrollEnd={(e) => this.changeIndicator(e)}//滚动动画结束时调用此函数。
          onScrollBeginDrag={() => clearInterval(this.Timer)}//拖动开始触发的事件，清除定时器
          onScrollEndDrag={() => this.startInterval()}//拖动结束，重新开启定时器
        >
          {this.renderView()}
        </ScrollView>
        <View style={styles.indicatorStyle}>
          {/* 指示器小圆点 */}
          {this.renderIndicator()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  indicatorStyle: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    height: 30,
    width: srceenWidth,
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "center",
    alignItems: 'center'
  }
})
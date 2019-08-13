import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import server from 'axios'
import '../../mock'
import HeaderScrollView from './ScrollViewTest'
import NewsDetails from './NewsDetails'
import Dimensions from 'Dimensions'
const { width: srceenWidth } = Dimensions.get('window');
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerData: [],
      newsData: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true
    })
    try {
      let responedata = await server.get("/getNewsData")
      if (responedata.data.code === 200) {
        const { bannerData, newsData } = responedata.data.data;
        //修改图片连接的格式，只接受https
        this.initImageUrl(bannerData);
        this.initImageUrl(newsData);
        this.setState({
          bannerData,
          newsData
        })
      } else {
        alert("请求出错");
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        isLoading: false
      })
    }
  }

  //mock数据image的图片连接是http，但RN的Image只接受https，需要修改一下
  initImageUrl = (initData) => {
    updatesData = initData.map((item) => {
      const newImage = item.image.slice(0, 4) + 's' + item.image.slice(4)
      item.image = newImage;
      return item
    });
    return updatesData
  }

  render() {
    return (
      this.state.isLoading
        ?
        <View style={styles.homeContainer}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
            animating={this.state.isLoading}
          />
        </View>
        :
        <FlatList
          style={{
            marginBottom: 100
          }}
          data={this.state.newsData}
          renderItem={this.renderNewsList}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={() => (<View style={{ width: srceenWidth * 0.9, height: 1, backgroundColor: '#cccccc', marginLeft: 15 }}></View>)}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={this.renderHeaderComponent}
        />
    );
  }



  keyExtractor = (item, index) => {
    return "index" + item.newsImage + index
  }

  renderNewsList = ({ item }) => {
    // console.log(item);
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => { this.pushToNewsDetails(item) }}
      >
        <View style={styles.newsItemStyle}>
          <Image
            style={styles.newsImageStyle}
            source={{ uri: item.image }}
            loadingIndicatorSource={true}
          />
          <View
            style={styles.newsRightDesc}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 10
              }}
            >{item.newsTitle}</Text>
            <Text
              style={{
                fontSize: 14,
                color: "gray"
              }}
            >{item.newsContent}</Text>
            <Text
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                color: "#FF6666"
              }}
            >浏览量{item.viewsCount}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  pushToNewsDetails = (data) => {
    this.props.navigator.push({
      component: NewsDetails,
      title: data.newsTitle,
      passProps: { data }
    });
  }
  renderHeaderComponent = () => {
    return (
      <HeaderScrollView
        dataSource={this.state.bannerData}
      />
    )
  }


}




const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  newsItemStyle: {
    flexDirection: "row",
    margin: 15,
    // borderWidth: 1,
    // borderColor: "gray",
  },
  newsImageStyle: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  newsRightDesc: {
    flexWrap: "wrap",
    width: srceenWidth * 0.67,
  }
})
export default Home;
import React, { Component } from 'react';
import {
  WebView,
  Text,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import server from 'axios'

class NewsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsDetailsContent: "",
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    })
    server.post("/getNewsDetails", { id: this.props.data.id })
      .then((data) => {
        this.setState({
          newsDetailsContent: data.data.data.newsDetailsContent
        })
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })
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
        <WebView
          source={{ html: this.state.newsDetailsContent, baseUrl: "" }}
          style={{ flex: 1 }}
          automaticallyAdjustContentInsets={true}
        />
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})
export default NewsDetails;
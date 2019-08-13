
/* 
  SectionList这个组件中，数据的格式必须包含有key，和data(数组)
  [{key:"?",data:[]},{key:"?",data:[]},]
  在renderItem的参数中，item就是data的值

*/

import React, { Component } from 'react';
import {
  View,
  SectionList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import CarsData from '../jsonData/Car.json'
import Dimensions from 'Dimensions'
const { width: srceenWidth } = Dimensions.get('window');
class SectionListTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: []
    };
  }
  componentDidMount() {
    const datas = [...CarsData.data]
    this.setState({
      sections: datas
    })
  }
  render() {
    console.log("asida");
    return (
      <View style={styles.container}>
        <View style={styles.headTitleStyle}>
          <Text style={{ marginTop: 10, fontSize: 20 }}> 汽车品牌大全 </Text>
        </View>
        <SectionList
          style={styles.sectionsListStyle}
          sections={this.state.sections}
          renderSectionHeader={this.renderCarTitle}
          renderItem={this.renderCarsList}
          keyExtractor={this.keyExtractor}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={this._separator}
        />
      </View>
    );
  }
  keyExtractor = (item, index) => {
    return "index" + item.icon + index
  }

  renderCarsList = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.carStyle}>
          <Image
            source={{ url: item.icon }}
            style={styles.carImageStyle}
          />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  renderCarTitle = ({ section: { key } }) => {
    return <Text style={{ height: 25, fontSize: 20, backgroundColor: "rgb(222,222,240)" }}>{key}</Text>
  }
  _separator = () => {
    return <View style={{ height: 0.4, backgroundColor: '#999999' }} />
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headTitleStyle: {
    width: srceenWidth,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionsListStyle: {

  },
  carStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  carImageStyle: {
    width: 80,
    height: 80,
    margin: 10
  }
})



export default SectionListTest;
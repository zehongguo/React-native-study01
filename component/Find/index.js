import React, {
  Component
} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<View style={styles.findContainer} >
      <Text>发现</Text>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
export default Find;
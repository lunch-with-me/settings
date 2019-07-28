import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

 
export default class EditProfile extends Component {
  static navigationOptions = {
    header: null
}
  render() {
    return (
      <View style={styles.MainContainer}>
        <View>
        <Text style={{ fontSize: 23 }}> You can alaways control what people see on your profile.</Text>
        <View style={}></View>
        <View></View>
        <View></View>
        </View>
        
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
    backgroundColor:'#aaaaaa'
  },
});
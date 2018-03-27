/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Animated
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Test extends Component{
  constructor(props){
    super(props);
    this.state = {
      opacity:new Animated.Value(0)
    }
  }
  componentDidMount(){
    console.log(this.props);
    Animated.timing(this.state.opacity,{
      toValue:1
    }).start();
  }
  render(){
    return (
      <Animated.View style={{...this.props.style,opacity:this.state.opacity}}>
          {this.props.children}
      </Animated.View>
    );
  }
}
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      opacity:new Animated.Value(0)
    }
  }
  componentDidMount(){
    Animated.timing(this.state.opacity,{
      toValue:1
    });
  }
  _onPressButton(){
    console.log(1);
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._onPressButton}>
        <Text style={{width:100,height:100,backgroundColor:"#ff0"}}>Button</Text>
      </TouchableHighlight>
      <Test style={{width:50,height:50,backgroundColor:"#ff0"}}>
        <Text style={{width:50,height:50,}}>aaaa</Text>
      </Test>
      <ScrollView pagingEnabled>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
        <Text style={styles.text}>adfdsfs</Text>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text:{
    lineHeight:40,
    backgroundColor:"#ff0",
    textAlign:"center",
    color:"#fff"
  }
});

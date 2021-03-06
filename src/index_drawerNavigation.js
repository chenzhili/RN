import React,{Component} from "react";
import {StackNavigator,TabNavigator,TabBarBottom,TabBarTop,DrawerNavigator} from "react-navigation"
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView,
    Animated,
    Button,
    Image
} from 'react-native';

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => {
            console.log(require("./chats-icon.png"));
            return (
                <Image
                    source={require('./chats-icon.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
                );
        },
    };

    render() {
        return (
        <Button
            onPress={() => this.props.navigation.navigate('Notifications')}
            title="Go to notifications"
        />
        );
    }           
}
  
  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./notif-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  
  const MyApp = DrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  });
export default MyApp;
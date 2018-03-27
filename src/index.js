import React, { Component } from 'react';
import {StackNavigator} from "react-navigation"
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView,
    Animated
  } from 'react-native';
  //组件
  import Index from "./Component/index";
  import DetailsScreen from "./Component/detaisScreen"

const Router = StackNavigator(
    {
        Index:{
            screen:Index
        },
        DetailsScreen:{
            screen:DetailsScreen
        }
    },
    {
        initialRouteName:"Index",
        navigationOptions: {
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          },
    }
);
export default function App(){
    return (
        <Router/>
    )
}
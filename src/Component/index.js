import React,{Component} from "react";
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

export default class Index extends Component{
    static navigationOptions = {
        title:"首页"
    }
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View>
                <Text>首页</Text>
                <TouchableHighlight>
                    <Button title="go to detail" onPress={()=>{
                    console.log(1);
                    this.props.navigation.navigate("DetailsScreen",{aa:1,bb:2});
                }}></Button>
                </TouchableHighlight>
                
            </View>
        );
    }
}
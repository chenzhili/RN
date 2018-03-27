import React,{Component} from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView,
    Animated,
    Button
  } from 'react-native';

export default class DetailsScreen extends Component{
    static navigationOptions  = (...arr)=>{
        console.log(arr);
        const {navigation} = arr[0];
        console.log(navigation);
        const title = navigation.state.params.aa;
        return {
            title:title,
            headerRight:(
                <Button onPress={()=>{alert("this")}}
                title="info" color="#ff0"/>
            )
        }
    }
    constructor(props){
        super(props);
    }
    render(){
        const params = this.props.navigation.state.params;
        console.log(params);
        let {aa,bb} = params?params:{aa:null,bb:null};
        console.log(aa);
        console.log(bb);
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
          title="Go to Details... again"
          onPress={() =>{this.props.navigation.navigate('DetailsScreen',{aa:1,bb:2})}}
        />
            <Button title="updateTitle" onPress={() =>{
                console.log(2);
                {this.props.navigation.setParams({aa:"update"})}
            }}/>
            </View>
        );
    }
}
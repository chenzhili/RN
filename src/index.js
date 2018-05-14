import React, { Component } from 'react';
import {StackNavigator,TabNavigator,TabBarBottom,TabBarTop} from "react-navigation"
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
import Ionicons from 'react-native-vector-icons/Ionicons';
//这里想集成 ionic 的 icons需要的配置比较多，先不管，这周弄一哈
/* https://blog.csdn.net/yeputi1015/article/details/70331912 */

  //组件
  import Index from "./Component/index";
  import DetailsScreen from "./Component/detaisScreen"
  import Setting from "./Component/setting";

  

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
// export default function App(){
//     return (
//         <Router/>
//     )
// }

//可以多个 StackNavigation 嵌套
/* class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
  
      return {
        headerLeft: (
          <Button
            onPress={() => navigation.navigate('MyModal')}
            title="Info"
            color="#ff0"
          />
        ),
      };
    };
    render(){
        return (
            <View>
                <Text>首页</Text>
                <TouchableHighlight>
                    <Button title="go to detail" onPress={()=>{
                    console.log(1);
                    this.props.navigation.navigate("Details",{aa:1,bb:2});
                }}></Button>
                </TouchableHighlight>
                
            </View>
        );
    }
  }
  
  class ModalScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
    }
  } */
  
 /*  const MainStack = StackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Details: {
        screen: DetailsScreen,
      },
    },
    {
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
  ); */
  //这种形成的 StackNavigator组件形成的多重路由样式的叠加，可以声明出不同的路由模式，这种方式
  
 /*  const RootStack = StackNavigator(
    {
      Main: {
        screen: MainStack,
      },
      MyModal: {
        screen: ModalScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  ); */
/* export default function App(){
    return (
        <RootStack/>
    )
}

class HomeScreen extends React.Component {
    componentWillMount(){
        console.dir(Ionicons); 
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      );
    } 
  } */
  
  class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
    }
  }
  
export default TabNavigator(
    {
        Home: { screen: Router },
        Settings: { screen: SettingsScreen },
    },
    {
        navigationOptions: ({ navigation }) => ({
            // 这个是指定 标签图标 的 同意管理
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={"ion-checkmark-circled"} size={25} color={tintColor} />;
            },
        }),
        // 这里是对于 选中 和 未选中的 颜色控制
        tabBarOptions: {
            activeTintColor: '#f00',  
            inactiveTintColor: '#000',
        },
        // 指定标签的 组件统一，因为 ios 和 android 默认组件不同
        tabBarComponent: TabBarBottom,
        // 标签的 位置
        tabBarPosition: 'bottom',
        animationEnabled: true,//标签状态改变是否有动画
        swipeEnabled: true,//是否想 swiper一样滚动标签
    }
);
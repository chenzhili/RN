# RN
exercise react native

2018/3/27
    1、对于调试上面
        I、对于新增了 文件后需要重新编译文件生成新的 东西，不然不能识别新增文件，因为集成到android上需要把代码进行重新打包；
        命令：react-native run-android //重新打包启动服务
        
        II、如果是指修改代码，native 支持 热更新，不需要重新编译
        命令：react-native start //相当于 启动 服务器一样
    2、路由：存在多种路由，但是如果是多平台需要用到 react-navigation;https://reactnavigation.org/docs/navigating.html
        I、this.props.navigation.navigate(路由的名字不是组件);//同一个路由下可以往 栈里存重复的，因为是数组
            传参：this.props.navigation.navigate(路由,{参数});
        II、this.props.navigation.goBack()//返回上一个

        III、Configuring the header bar
            这种设置是设置在 对应的 每一个 路由配置组件的 static 的 navigationOptions上，可以用 fun和obj的方式，但是fun需要返回obj

            所有的配置项：https://reactnavigation.org/docs/stack-navigator.html#navigationoptions-used-by-stacknavigator

            //在每个页面设置这个，只会改变当前页面的状态
            static navigationOptions = {
                title: 'Home',
                headerStyle: { //主要改变bar的背景色
                backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',//改变返回按钮和title的样式
                headerTitleStyle: {//个性化设置fontFamily, fontWeight and other Text style properties for the title
                fontWeight: 'bold',
                },
            };
            //如果想统一的配置公共样式
                写在 StackNavigator中加入
                navigationOptions: {
                    headerStyle: {
                    backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    },
                }

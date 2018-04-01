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
2018/3/28
    1、对于react-navigation的模式的注意，对于想用是StackNavigation可以进行多个的嵌套，因为他返回的也是个组件；可以在不同的 路由 header样式中设置不同的 样式，然后放到 rootRouter 中；


2018/3/30
    主要是在看react native项目中遇到的东西：
        1、用dva内部封装的 redux 不是用 react-redux，用法更加简单；
            对于 dva 来说 ，由于 不需要 dva 中的 4.0 路由，不支持，所以 只是 引入 dva 的 核心 功能；
                为 dva-core
        2、对于 
        app.start = container => () =>
            <Provider store={store}>
            {container}
            </Provider>
            就是 声明一个 函数 
            等价于  app.start = function(container){
                return funciton(){  //这里返回一个 函数组件
                    return (
                        <Provider store={store}>
                            ...
                        </Provider>
                    );
                }
            }
        3、在 原生 redux 中，所有的操作都是同步的，reducer是一个纯函数的同步操作，实际开发中需要异步不阻塞进程的前提下进行一些额外的操作，这个时候向外暴露了 可以用 中间件的方式自定制 异步操作；
        出现很多的 中间件 插件
        redux-saga 就是用yield方式实现的；
        同时 dva 中也是对于 redux，react-router，redux-saga的再封装，实现更加快捷的操作；
        4、对于 redux 的理解：
            其实 redux 只是对于数据逻辑处理的一种简单的思想，其实只存在 同步操作，存在 
            store(对应的快照 state)：createStor（创造存储器），getState（获取某一个状态的值）

            action：dispatch（）

            reducer：改变 state ，返回新的 state，并且更新view

            在此基础上，社区为了 满足 现在 开发需求，对于 异步操作的执行，推出了很多的 中间件；注明一点的：
            redux-saga

        5、react-redux的用法：
            1、定义：就是 redux 在 react 基础上进行的一层封装；
            2、几个注意点：
                I、容器组件：用于 处理 逻辑和从外界获取store(state);
                容器组件的创建：

                const 容器组件 = connect((mapStateToProps,mapDispatchToProps))(UI组件);

                mapStateToProps：建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系

                mapDispatchToProps：connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store

                II、UI组件：用于 以 props 方式 获取 state数据，展示在 UI上的 组件；

                III、有了上面两个，但是怎么从外界获取 store 没有，通过 import { Provider } from 'react-redux';
                <Provider store={store}>//这个组件下的所有后代组件都能得到这个 store
                    <App />
                </Provider>,

                IV、redux-persist 用于持久化；感觉就是用来缓存数据的；
            
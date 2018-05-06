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
            
2018/4/1
    主要是在看react native项目中遇到的东西：
    1、就是在 容器组件 链接 UI 组件中的 写法的理解：
        @connect(({ home }) => ({ ...home }))
        class Home extends Component {
            
        }
        对于 @connect 的理解，其实这个是 es7 出现的新语法，修饰器的理解问题；
        在 react-redux中的本来的写法：
          export default connect(mapStateToProps)(Home);
        ********
            在 修饰器中 @connect() class Home{} //修饰器 就是为了 修改 Home 类的行为的
            等价于
            connect()(Home); //这个就跟 上面的 写法 完全一致了；
        *******

2018/4/9
    1、react-native link 命令可以自动配置对应的android配置，不用手动配置但是还是要注意有些时候配置不完整，检查下
    2、gradlew clean 重新装插件以后需要清除 以前的android编译的缓存，不然会报错，说某个文件有问题
2018/4/17
    1、在 RN中 对于android的物理返回键的运用；
        注意点：
            I、监听函数是按倒序的顺序执行（即后添加的函数先执行）。如果某一个函数返回true，则后续的函数都不会被调用。
            II、当 监听函数返回的值不同有不同的影响：
                true:表示不执行默认事件，就是返回默认事件也不会执行
                false:会执行默认的返回事件
        http地址：http://bbs.reactnative.cn/topic/480/%E5%AE%89%E5%8D%93back%E9%94%AE%E7%9A%84%E5%A4%84%E7%90%86-%E5%9F%BA%E6%9C%AC-%E9%AB%98%E7%BA%A7%E7%AF%87
        
    2、对于 react-navigation的高级理解(今天没时间搞了，这周必须弄了)

2018/4/25
    1、拥有tabs底部导航的时候，在软件盘弹出的时候会导致，页面整体被压缩的解决；
    就是在 AndroidManifest.xml中的 activity标签中加入
    android:windowSoftInputMode="stateAlwaysHidden|adjustPan";
    https://blog.csdn.net/u011690583/article/details/53808773

2018/4/26
    1、对于 打包 报错：
    Error:Execution failed for task ':app:transformClassesWithDexForDebug'.
        解决：
        这个问题是说：打包的时候出现了相同的 jar 包；
        这个可能是真的存在两个，但是在我操作中，是由于我删除了 某个 react-native的插件，但是缓存中可能还是存在，所以打包失败；
            这个时候:就直接删除 android 中有关于 build的文件，在打包；

            <!-- 遇到这种问题不要急，首先先检查以下项目的jar，看看有没有重复的，其次在看看依赖的项目引用有没有重复的。这都不行就在主项目的build.gradle里面加这句
            multiDexEnabled true 有时候会有缓存，试着删除主项目的build文件重新跑 -->

2018/5/3
    1、对于 react-native 修改包名的流程和需要注意的问题
        I、就是 android/app/build.gradle文件里的applicationId；
        II、android/app/src/main/AndroidManifest.xml的package；
        III、在android/app/src/main/java/com下创建 对应的包名的文件夹，并且把以前的java复制到里面，并且改变 两个java里对于 有关的引用
        IV、修改打包脚本文件ceshiApp/android/app/BUCK 里相关的 包名
        最重要的是：
        V、对于 在初始化 react-native的时候，需要修改对应的包名，形如：
            AppRegistry.registerComponent('firstRN', () => App);中对应的 firstRN这里就是注册app的入口


2018/5/6
    1、对于文件的上传下载，目前最优的解决插件地址：
        react-native-fetch-blob （需要好好地测试下）

        https://github.com/joltup/react-native-fetch-blob#user-content-upload-example--dropbox-files-upload-api


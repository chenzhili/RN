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
    Image,
    TouchableWithoutFeedback
  } from 'react-native';
/* 图片引用 */
// const ImagePicker = require('react-native-image-picker');
import ImagePicker from 'react-native-image-crop-picker';
const FileUpload = require('NativeModules').FileUpload;
const options = {
    title: '选择图片', 
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '图片库', 
    cameraType: 'back',
    mediaType: 'photo',
    videoQuality: 'high', 
    durationLimit: 10,
    maxWidth: 600,
    maxHeight: 600,
    aspectX: 2, 
    aspectY: 1,
    quality: 0.8,
    angle: 0,
    allowsEditing: false,
    noData: false,
    storageOptions: { 
        skipBackup: true, 
        path: 'images'
    }
};
/* 测试 rn 的插件 */
const  RNFS = require('react-native-fs');
import OpenFile from 'react-native-doc-viewer';
var SavePath = Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;

export default class Index extends Component{
    static navigationOptions = {
        title:"首页"
    }
    constructor(props){
        super(props);
        this.state = {
            uri:""
        }
    }
    isShowImage(e){
        console.log(ImagePicker);
        console.log(options);
        ImagePicker.openPicker({
            multiple: true
          }).then(images => {
            console.log(images);
        });
        // /* ImagePicker.launchCamera(options, (response)  => {
        //     // Same code as in above section!
        //     console.log(response);
        //   }); */
        // ImagePicker.showImagePicker(options, (response) => {
        //     console.log('Response = ', response);
            
        //     if (response.didCancel) {
        //       console.log('User cancelled image picker');
        //     }
        //     else if (response.error) {
        //       console.log('ImagePicker Error: ', response.error);
        //     }
        //     else if (response.customButton) {
        //       console.log('User tapped custom button: ', response.customButton);
        //     }
        //     else {
        //       let source = { uri: response.uri };
          
        //       // You can also display the image using data:
        //       // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        //     console.log(source);
        //       this.setState({
        //         uri: source
        //       });
        //     }
        //   });
    }
    getDir(){
        RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
        .then((result) => {
            console.log('GOT RESULT', result);

            // stat the first file
            return Promise.all([RNFS.stat(result[0].path), result[0].path]);
        })
        .then((statResult) => {
            if (statResult[0].isFile()) {
            // if we have a file, read it
            return RNFS.readFile(statResult[1], 'utf8');
            }

            return 'no file';
        })
        .then((contents) => {
            // log the file contents
            console.log(contents);
        })
        .catch((err) => {
            console.log(err.message, err.code);
        });
    }
    render(){
        console.log(this.props);
        return (
            <View>
                <Text>首页test</Text>
                <TouchableHighlight>
                    <Button title="go to detail" onPress={()=>{
                    console.log(1);
                    this.props.navigation.navigate("DetailsScreen",{aa:1,bb:2});
                }}></Button>
                </TouchableHighlight>
                <TouchableWithoutFeedback onPress={
                    this.isShowImage.bind(this)
                }>
                    <View style={{width:100,height:100,backgroundColor:"#ff0"}}>
                        <Text>点击获取图片</Text>
                    </View>
                </TouchableWithoutFeedback>
                {/* <Image source={this.state.uri} style={{width:100,height:100}}></Image> */}
                <TouchableWithoutFeedback onPress={
                    this.getDir.bind(this)
                }>
                    <View style={{width:100,height:100,backgroundColor:"#ff0"}}>
                        <Text>获取文件</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
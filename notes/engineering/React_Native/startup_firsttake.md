## 准备Android环境
#### 1. 安装 Android Studio[​](https://reactnative.cn/docs/environment-setup#1-%E5%AE%89%E8%A3%85-android-studio "标题的直接链接")

[首先下载和安装 Android Studio](https://developer.android.google.cn/studio/)，国内用户可能无法打开官方链接，请自行使用搜索引擎搜索可用的下载链接。安装界面中选择"Custom"选项，确保选中了以下几项：

- `Android SDK`
- `Android SDK Platform`
- `Android Virtual Device`

然后点击"Next"来安装选中的组件。

---
以下是项目初始化
先卸载之前可能装过的
```cmd
npm uninstall -g react-native-cli @react-native-community/cli
```
然后重新安装

```cmd
npx react-native@latest init AwesomeProject
```
然后 等ing

长时间没用了会报错
记得升级一下node 直接去官网下最新版安装就好
**2023-12-28T01:11:00+08:00**

项目出来了 先用Android Studio打开目录下Android文件夹 安装一下依赖.




# 移动端开发

**expo调试 可以windows调试iOS！！！！！！！！ 大进步**

  

官网[React Native](https://reactnative.cn/) 里面有文档教程 可能会有坑

1. node 最新版 双数版本官网 LTS长期稳定版 前端必备的 不多说
    
2. Android Studio 安卓开发必备
    
    1. 需要安装以下环境包
        
    2. `Android SDK`
        
    3. `Android SDK Platform`
        
3. XCode iOS开发必备
    
4. Jdk 安卓本身是基于Java的 所以jdk是必须的，还有JRE 这两个别放一个路径下，能用就不用折腾了
    
5. IDE 我用的VSCode 后边可能试试webstorm
    

## 注意事项，常见问题

学会使用文心一言

https://yiyan.baidu.com/

### Doctor

React-native有个好工具 就是排查哪部分有错误

在目录下的终端输入 `npx react-native doctor`

如果没有npx 也可以装一个，适用于出错后来排查，如果已经可以运行了 但是他还是会有error，比如我的。

![](https://wm21xsx98h.feishu.cn/space/api/box/stream/download/asynccode/?code=YjdmZDdiZjJmOGFiZmUxYWI2YjdmMmRmMmQ5Zjc4OGFfV0NwaFdMc0JURktrMzFPRDFMcnhRUjduNHRYZTFMdmFfVG9rZW46TktjTmJIUGszb2ZXemt4VUxCYmNtYjRSbnBTXzE3MDQ0NDI5NDU6MTcwNDQ0NjU0NV9WNA)

### 关于安卓环境包的安装

- `Android SDK`
    
- `Android SDK Platform`
    

配置参考我的

```Go
buildscript {
    ext {
        buildToolsVersion = "31.0.1"//工具版本
        minSdkVersion = 21
        compileSdkVersion = 33
        targetSdkVersion = 33
 
        if (System.properties['os.arch'] == "aarch64") {
            ndkVersion = "24.0.8215888"
        } else {
            ndkVersion = "21.4.7075529"
        }
    }
    repositories {
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven {url 'https://maven.aliyun.com/repository/public'}
        // maven { url 'https://maven.aliyun.com/repository/jcenter' }这个用不了换为jcenter
         google()
         mavenCentral()
    jcenter()
    }
    dependencies {
        classpath('com.android.tools.build:gradle:8.1.3')
        classpath("com.facebook.react:react-native-gradle-plugin")
        classpath("de.undercouch:gradle-download-task:5.0.1")
    }
}
 
allprojects {
    repositories {
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url("$rootDir/../node_modules/react-native/android")
        }
        maven {
            // Android JSC is installed from npm
            url("$rootDir/../node_modules/jsc-android/dist")
        }}
//         }
        maven { url 'https://maven.aliyun.com/repository/public' }
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://www.jitpack.io' }
    }
}
```

版本

![](https://wm21xsx98h.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWM1ZmJjZjYyYTRhZGZlNmViNTZiZGIwNjhjMGM2N2NfMWVzMW15bExsdGxuTUZPRTBMbzkweGdnOVZLdFNvekJfVG9rZW46S2x2SGJPOGk1b1lLVVF4c0ZkdmNMcmJkblRiXzE3MDQ0NDI5NDU6MTcwNDQ0NjU0NV9WNA)

![](https://wm21xsx98h.feishu.cn/space/api/box/stream/download/asynccode/?code=MWY2NTMwMDhlMjExZGVlYjFkMzhjM2U5NDIxYjY3NzRfbDJyREZ3SThQOVJGVXhNU0JjbEwzYWhaeVU4cHo5T2FfVG9rZW46VWowemJEQTd1bzdrcFN4b2FwZWNiUEEzbkhnXzE3MDQ0NDI5NDU6MTcwNDQ0NjU0NV9WNA)

往下翻

![](https://wm21xsx98h.feishu.cn/space/api/box/stream/download/asynccode/?code=OWFlZTUwYjYyNjhlMmNjOTA5NDZmOGVhMmMzYTIwZGJfYmdYd1M4aTc5TmlhYjdxRXhBS2czY1BIOTFrMmVHd2NfVG9rZW46QUVHN2JLMVNPb2twY0R4S2Uyc2NQVzdXbndoXzE3MDQ0NDI5NDU6MTcwNDQ0NjU0NV9WNA)

注意 如果没换gradle路径的话 可能会装到C盘 占用二十多G，如果c盘内存不多可以换一下路径。

怎么换呢

AwesomeProject\android\gradle\wrapper\gradle-wrapper.properties 这个文件中就告诉你

它是在GRADLE_USER_HOME这个位置去找 所以在环境变量中添加这个项目 然后指向你想要的位置（其他盘）然后把原来的删了就行了。

### 真机调试

没试过电脑上装虚拟安卓机，就用自己手机调试，用数据线连上然后打开开发者模式（打开方式每个品牌手机都不一样，如果有选择充电还是传文件的，选择传文件，不然无法在手机上装app）。

然后打开终端Terminal 输入 `adb devices`

![](https://wm21xsx98h.feishu.cn/space/api/box/stream/download/asynccode/?code=MzA2NmZiOTU3MTM2NjI3ZjlhODQ5YTdiOTJiM2I1NzhfTjMzaDZuRThHOWhJTWxWbTBZdklWNGg3T3R4Z1FzTExfVG9rZW46TEFmV2J0anYzb1FURmt4SXRzaGNEeDBIbndlXzE3MDQ0NDI5NDU6MTcwNDQ0NjU0NV9WNA)

前边都装好了 连上电脑 然后打开Android Studio 和 前端IDE 然输入 `npm run start` 选择安卓 就自动会给手机装app 然后IDE更改代码 手机端的app也会及时更新修改。
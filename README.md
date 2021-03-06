## 三列布局 内容居中
  外层container
    display: flex;
    flex-direction: column;
    align-items: center;

## 更改页面背景颜色 不是更改body 没有body这个元素 而是更改page
page {
  background-color: #fff;
}

## align-items分2种情况(垂直方向对齐 即侧轴对齐方式)
1 多行排列（容器为flex-direction: column）：
改变多行排列的多个元素的对齐方式 比如多行垂直方向靠左排列
  align-items: flex-start;// flex-start flex-end center center strech baseline
2 单行排列（容器为flex-direction: row）
单行排列的元素高度可能不同 在垂直方向的对齐方式
align-items: flex-start;// flex-start flex-end center center strech baseline

## align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用 （可用于流式布局）
  类似正常布局的float布局 父级元素display: flex flex-direction: row flex-wrap: wrap(必要条件)
  https://www.cnblogs.com/liyu2012/p/5525609.html
  html：
  <view class='test2'>
    <text>aaaa</text>
    <text>bbb</text>
    <text>ccc</text>
    <text>ddd</text>
    <text>eee</text>
    <text>fffffff</text>
    <text>gggg</text>
    <text>hhhhh</text>
    <text>iiiiiii</text>
    <text>jjjjj</text>
    <text>kkkkk</text>
    <text>mmmm</text>
    <text>nnnnnn</text>
  </view>
  
  css：
  .test2 {
    display: flex;
    flex-direction: row; // 必要条件
    flex-wrap: wrap;  // 必要条件
    background: gray;
    width: 800rpx;
    height: 600rpx;
    align-content: space-around; // flex-start | flex-end | center | space-between | space-around | stretch
  }
  .test2 text {
    width: 150rpx;
    height: 60rpx;
    background-color: red;
    border: 1px solid green;
    margin-top: 10rpx;
  }

## justify-content 改变一行排列的多个元素的对齐方式 比如一行靠左排列
  jutify-content: flex-start;

## 微信中1px边线设置
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  阴影设置
  box-shadow: 0 5px 10px rgba(0, 0, 0, .3);

## block块元素设置了margin-left 其宽度会自动减少相应的值
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;

## 多行文本溢出省略号
  单行 html
    width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  效果如图： 文本的溢出显示省略号同学们......

  多行文本: font-size: .2rem; line-height: .3rem; height: .9rem; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; /自动显示3行 多出的部分用...代替/

## 文本元素不要分行 否则会增加不可控的空白部分
  可取的写法：
  <text class='add-title p'>快速添加CGI指引</text>  
  不可取的写法：
  <text class='add-title p'>
    快速添加CGI指引
  </text>
## 服务器端的node代码如果不上传到远程腾讯云服务器上 在本地调试微信小程序的时候无法正常请求到数据。因为node提供的服务只是在本地 没有发布到服务器上
所以 微信小程序node服务的代码必须上传到远程腾讯云服务器 才可以在本地请求到数据

## 小程序组件开发
```
https://www.jianshu.com/p/8a2a730d9e60
1 新建目录
components/songList/songList.wxml   1
                    songList.js     2
                    songList.json   3
                    songList.wxss   4
pages/index
第一步 定义组件 备注 必须定义songList.json文件
 2 songList.js:
  Component({
    methods: {
      aaa: function (v) {
        console.log(v)
      }
    }
  })
 
 3 songList.json
  {
    "component": true,
    "usingComponents": {}
  }
第二步 使用
在index.json中定义
{
  "usingComponents": {
    "songList": "/components/songList/songList"
  }
}
在index中使用
<songList></songList>
```
## 小程序组件之间的通信解决方案
微信小程序组件化的解决方案
https://zhuanlan.zhihu.com/p/33274694

## 知乎 淘宝 flex布局兼容写法：
父容器：
```
（display: flex的兼容写法）
display:-webkit-box;
display: -moz-box;
display:-ms-flexbox;
display: -webkit-flex;
display:flex

（flex-direction:column兼容写法）
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-moz-box-orient: vertical;
-moz-box-direction: normal;
-webkit-flex-direction: column;
-ms-flex-direction:column;
flex-direction:column;

（flex-direction:row兼容写法）
-webkit-box-orient:horizontal;
-webkit-box-direction:normal;
-ms-flex-direction:row;
flex-direction:row;

（align-items: center的兼容写法）
-webkit-box-align:center;
-ms-flex-align:center;
align-items:center

(justify-content:center兼容写法)
-webkit-box-pack:center;
-ms-flex-pack:center;
justify-content:center;
```
# flex布局坑
https://segmentfault.com/a/1190000006559564

# 微信省市区三级联动封装
https://www.jianshu.com/p/3040882e92cb
github地址：https://github.com/leesonp/littleAPP 

# 微信修改数组某一个值
```
html:
<block wx:for='{{dataList}}' wx:key='{{index}}'>
  <view bindtap='changeValue' data-index='{{index}}' data-item='{{item}}'>{{item + ' ' + index}}</view>
</block>
<view>common data</view>
<view>{{curData}}</view>
js:
Page({
  data: {
    dataList: [123, 456],
    curIndex: 0,
    curData: ''
  },
  onReady () {
    // 初始值设置为data1
    this.setData({
      curData: this.data.dataList[this.data.curIndex]
    })
  },
  changeValue (e) {
    console.log(e.currentTarget.dataset);
    var index = e.currentTarget.dataset.index;
    // this.setData({
    //   dataList: [80, 90]
    // });
    this.setData({
      // 'curData[1]': this.data.dataList[this.data.curIndex]
      [`dataList[${this.data.curIndex}]`]: 1000
    });
    this.setData({
      curData: this.data.dataList[this.data.curIndex]
    });
    // 重新修改curIndex
    console.log(this.data.dataList);
  }
});
```

## 小程序提交form表单
给input框添加
bindconfirm="formSubmit"
后 每次在手机键盘的完成按钮点击完成 就会触发提交事件 及触发formSubmit。
相当于点击了<button formType="submit">提交</button> 触发了及触发formSubmit

```
html:
    <form bindsubmit="formSubmit" bindreset="formReset">  
      <input type="text" class="input-text" name="username" placeholder="请输入姓名" bindconfirm="formSubmit" />
      <checkbox-group name="hobby">  
          <label><checkbox value="羽毛球"/>羽毛球</label>  
          <label><checkbox value="游泳"/>游泳</label>  
      </checkbox-group>
      <view class="section btn-area">  
          <button formType="submit">提交</button>  
          <button formType="reset">清空</button>
      </view>  
    </form>

JS:
Page({
  data: {
  },
  formSubmit (e) {
    console.log('submit',e.detail.value);
  },
  formReset () {
    console.log('reset');
  }
})
```
## form内包含元素样式问题
form元素内直接包含input元素 form设置flex定位 会出问题(input和image无法对齐)。如：
```
  <form>
    <view class='search-wrapper'>
      <input placeholder-class="phcolor" placeholder="请输入" />
      <image src='./img/search.png'></image>
    </view>
  </form>
````  
解决办法：
form内用一个view包裹层 然后 这个viw包裹层用flex定位，就可以解决。  

## pages内的文件夹 不能有多余的文件 每一个app.json注册的页面都要在pages中注册 要一一对应 不能多也不能少。

## 获取页面对象
var pages = getCurrentPages()    //获取加载的页面
var currentPage = pages[pages.length-1]    //获取当前页面的对象

## 字体规范
常用字号为20，18，17，16，14，13，11（pt）

## 微信小程序appId获取授权整理
小程序端

后端（如php端）
  为防止接口被任何人调用 需要在获取前台发送request请求时获取开发者的appId（注意 普通用户是没有这个appId的）。只有在后台数据库中授权的appId 才能通过验证 获取access_token 返回给前端

## 关于小程序的background地址 不可以是本地图片 必须是网络图片 

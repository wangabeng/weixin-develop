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

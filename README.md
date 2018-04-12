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
1 多行排列：
改变多行排列的多个元素的对齐方式 比如多行靠左排列
  align-items: flex-start;// flex-start flex-end center center strech baseline
2 单行排列
单行排列的元素高度可能不同 在垂直方向的对齐方式
align-items: flex-start;// flex-start flex-end center center strech baseline

## align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

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

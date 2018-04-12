## 三列布局 内容居中
  外层container
    display: flex;
    flex-direction: column;
    align-items: center;

## 更改页面背景颜色 不是更改body 没有body这个元素 而是更改page
page {
  background-color: #fff;
}

## align-items改变多行排列的多个元素的对齐方式 比如多行靠左排列
  align-itemS: flex-start;

## justify-content 改变一行排列的多个元素的对齐方式 比如一行靠左排列
  jutify-content: flex-start;

## 微信中1px边线设置
border-bottom: 1px solid rgba(0, 0, 0, .1);

## block块元素设置了margin-left 其宽度会自动减少相应的值

## 多行文本溢出省略号
单行 html
    width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

效果如图： 文本的溢出显示省略号同学们......

多行文本: font-size: .2rem; line-height: .3rem; height: .9rem; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; /自动显示3行 多出的部分用...代替/

Page({
  data: {
    regionArr: [['广东省', '广州市', '天河区'], ['广东省', '广州市', '白云区']]
  },
  bindRegionChange: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index);
    this.setData({
      [`regionArr[${index}]`]: e.detail.value
    })
  }
})
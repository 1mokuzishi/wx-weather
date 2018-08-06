var bmap = require('../../libs/bmap-wx.js');

// pages/future/future.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weatherData:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    
    var location=options.location;
   

    var that = this;
    //创建百度地图对象
    var BMap = new bmap.BMapWX({
      ak: 'p8f3N5LMbI8bESXXRS3ikcvV8G2xd8S2'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.originalData.results[0].weather_data;
      var Data=new Array;
      for(var i=1;i<4;i++)
      {
        Data.push(weatherData[i]);
      }
      that.setData({
        weatherData: Data
      });
      console.log(that.data.weatherData);
    }
    // 发起weather请求 
    BMap.weather({
      location: location,
      fail: fail,
      success: success
    }); 

  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
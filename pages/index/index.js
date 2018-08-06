//引入百度地图模块
var bmap = require('../../libs/bmap-wx.js');
var city = require('../../utils/city.js');

Page({
  data:{
    weatherData: '',
    address: '',//地址
    jwd:'',
  },
  onLoad : function(options){
    var that=this;
    //创建百度地图对象
    var BMap = new bmap.BMapWX({
      ak:'p8f3N5LMbI8bESXXRS3ikcvV8G2xd8S2'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
     var Data = { 
        '城市' : weatherData.currentCity,
        'PM2.5': weatherData.pm25 ,
        '日期':  weatherData.date,
        '温度':  weatherData.temperature,
        '天气':  weatherData.weatherDesc ,
        '风力':  weatherData.wind,
        'dayPictureUrl':data.originalData.results[0].weather_data[0].dayPictureUrl,
        }
      console.log(Data);
      that.setData({
        weatherData: Data
      });
    }
    // 发起weather请求 
    BMap.weather({
      location: '',
      fail: fail,
      success: success
    }); 

  },
  bindKeyInput: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  click_weather: function () {
    // 输入的城市
    var cityname = this.data.address;
    // 经纬度

    var res = city.result;
    // 经纬度
    var jwd = "";
    for (var i = 0; i < res.length; i++) {
      if (cityname == res[i].shortname) {
        jwd += res[i].longitude + "," + res[i].latitude;
      }
    }
  
    var that = this;
    //创建百度地图对象
    var BMap = new bmap.BMapWX({
      ak: 'p8f3N5LMbI8bESXXRS3ikcvV8G2xd8S2'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      var Data = {
        '城市': weatherData.currentCity,
        'PM2.5': weatherData.pm25,
        '日期': weatherData.date,
        '温度': weatherData.temperature,
        '天气': weatherData.weatherDesc,
        '风力': weatherData.wind,
      }
      that.setData({
        jwd:jwd,
        weatherData: Data
      });
    }
    // 发起weather请求 
    BMap.weather({
      location: jwd,
      fail: fail,
      success: success
    }); 

  },
  
})
// pages/createBarCode/index.js
import util from '../../utils/util.js';
// import { BrowserQRCodeReader } from '@zxing/library';


// import jsbarcode from '../../node_modules/jsbarcode';
import Canvas from 'canvas';
import {
  createCanvas
} from 'canvas';
// var JsBarcode = require('jsbarcode');
import JsBarcode from '../../utils/js/JsBarcode.js';
// Canvas v1
var Canvas = require("canvas");
// Canvas v2
var {
  createCanvas
} = require("canvas");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 生成条形码
  createBarcode: function() {

    // const codeReader = new BrowserQRCodeReader();
    // const img = document.getElementById('img');


    // const result = codeReader.decodeFromImage(img);


    // console.log(result);
    // // Canvas v1
    // var canvas = new Canvas();
    // // Canvas v2
    // var canvas = createCanvas();

    // console.log(JsBarcode(canvas, "Hello"));
    util.createBase64Barcode(12123123);
  },
})
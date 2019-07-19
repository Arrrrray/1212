// pages/createQRcode/index.js
import util from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 二维码的内容
    text: '',
    // 输入的字符长度
    text_length: 0,
    // 生成给base64二维码地址
    qrcodesrc: '',
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

  // 用户输入的内容
  inputTextChange: function(e) {
    this.setData({
      text: e.detail.value,
      text_length: e.detail.cursor,
    })
  },

  // 生成二维码
  createQRcode: function() {
    const {
      text
    } = this.data;
    let qrcodesrc = util.createBase64QRcode(text);
    this.setData({
      qrcodesrc,
    })
  },
})
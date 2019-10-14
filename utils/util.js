import wxqrcode from './js/wxqrcode.js';
import create_qrcode from './js/qrcode/index.js';
// import JsBarcode from './js/JsBarcode.js';
// import barcode from './js/barcode/index.js';
// const formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

const util = {
  formatTime: function(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(this.formatNumber).join('/') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')
  },
  formatNumber: function(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  },

  // 生成base64格式二维码图片，不能包含？
  createQrCodeImg: function(code, size) {
    return wxqrcode.createQrCodeImg(code, size)
  },

  // 生成base64二维码
  createBase64QRcode: function(code) {
    let text = code;
    let t = '0'; //二维码容量，0表示自动扩容
    let e = 'M'; //二维码容错率 L:(7%),M:(15%),Q:(25%),H:(30%)
    let m = 'Byte'; //二维码支持的格式 Numeric：数字，Alphanumeric：字母数字，Byte：字节，Kanji：(日语中的)汉字体系;日本汉字
    let mb = 'UTF-8'; //二维码编码格式 default：默认，SJIS：日本电脑系统常用的编码表，能容纳全形及半形拉丁字母、平假名、片假名、符号及日语汉字，UTF-8
    return create_qrcode(text, t, e, m, mb)
  },

  // 生成base64条形码
  createBase64Barcode: function(text) {
    console.log(text);

    let code128 = barcode('code128', {
      data: text,
      width: 400,
      height: 100,
    });

    code128.getBase64(function(err, imgsrc) {
      if (err) throw err;

      // if we're using HTTP or another framework
      res.end(console.log('imgsrc', imgsrc));
    });

    // let canvas = document.createElement("canvas");
    // JsBarcode(canvas, text, {
    //   format: "CODE39"
    // });
    // return canvas.toDataURL("image/png");
  },
}

module.exports = util;
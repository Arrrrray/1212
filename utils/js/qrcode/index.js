import qrcode from './qrcode.js';

const create_qrcode = (text, typeNumber, errorCorrectionLevel, mode, mb) => {
  qrcode.stringToBytes = qrcode.stringToBytesFuncs[mb];

  var qr = qrcode(typeNumber || 4, errorCorrectionLevel || 'M');
  qr.addData(text, mode);
  qr.make();

  //  return qr.createTableTag();
  //  return qr.createSvgTag();
  // return qr.createImgTag();
  return qr.createDataURL();
}
export default create_qrcode;
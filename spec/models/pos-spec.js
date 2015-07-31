var Cart = require("../../models/cart.js");
var Scanner = require("../../models/scanner.js");
var Pos = require("../../models/pos.js");

ateDigitToString = function(num) {
  return num < 10 ? '0' + num : num;
};

var currentDate = new Date(),
  year = dateDigitToString(currentDate.getFullYear()),
  month = dateDigitToString(currentDate.getMonth() + 1),
  date = dateDigitToString(currentDate.getDate()),
  hour = dateDigitToString(currentDate.getHours()),
  minute = dateDigitToString(currentDate.getMinutes()),
  second = dateDigitToString(currentDate.getSeconds()),
  formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;

var expectText =
  '***<没钱赚商店>收据***\n' +
  '打印时间：' + formattedDateString + '\n' +
  '----------------------\n' +
  '名称：雪碧，数量：3瓶，单价：3.00(元)，小计：6.00(元)\n' +
  '名称：荔枝，数量：3斤，单价：15.00(元)，小计：45.00(元)\n' +
  '----------------------\n' +
  '挥泪赠送商品：\n' +
  '名称：雪碧，数量：1瓶\n' +
  '----------------------\n' +
  '总计：51.00(元)\n' +
  '节省：3.00(元)\n' +
  '**********************';

describe("Cart",function() {
  describe("constructor",function() {
    it("accept name",function() {
      var scan = new Scanner();
      var result = scan.changeForm();
      var cart = new Cart();
      //var cartItem = new()
      cart.add(result);
      var pos = new Pos();
      expect(pos.concatReceiptString(cart)).toBe(expectText);
    });
  });
});

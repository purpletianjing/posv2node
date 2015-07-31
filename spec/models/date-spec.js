var DateTime = require("../../models/date.js");

dateDigitToString = function(num) {
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

describe("Cart",function() {
  describe("constructor",function() {
    it("accept name",function() {

      expect(DateTime['getFormattedDate']()).toBe(formattedDateString);
    });
  });
});

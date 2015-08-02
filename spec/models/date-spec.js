var DateTime = require("../../models/date.js");

var date = {
  'year': 1,
  'month': 1,
  'day': 1,
  'hour': 1,
  'minute': 1,
  'second': 1
};

var formattedDateString = '01' + '年' + '01' + '月' + '01' + '日 ' + '01' + ':' + '01' + ':' + '01';

describe("Cart", function() {
  describe("constructor", function() {
    it("accept name", function() {
      expect(DateTime['getFormattedDate'](date)).toBe(formattedDateString);
    });
  });
});

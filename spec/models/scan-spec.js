var result = [{
  barcode: 'ITEM000001',
  count: 1
}, {
  barcode: 'ITEM000001',
  count: 1
}, {
  barcode: 'ITEM000001',
  count: 1
}, {
  barcode: 'ITEM000003',
  count: 3
}];

var Scanner = require("../../models/scanner.js");

describe("Scanner", function() {
  describe("changeForm", function() {
    it("the form changed", function() {
      var scan = new Scanner();
      expect(scan.changeForm()).toEqual(result);
    });
  });
});
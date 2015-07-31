function Scanner() {

}
var inputs = [
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000003-3'
];
Scanner.prototype.changeForm = function() {
  var changeResult = inputs.map(function(val) {
    return ({
      barcode: val.split("-")[0],
      count: parseInt(val.split("-")[1]) || 1
    });
  });
  return changeResult;
};


module.exports = Scanner;

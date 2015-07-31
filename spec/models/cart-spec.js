var Cart = require("../../models/cart.js");
var Scanner = require("../../models/scanner.js");

describe("Cart",function() {
  describe("constructor",function() {
    it("accept name",function() {
      var scan = new Scanner();
      var result = scan.changeForm();
      var cart = new Cart();
      //var cartItem = new()
      cart.add(result);
      expect(cart.cartItems[0].barcode).toEqual('ITEM000001');
      expect(cart.cartItems[0].count).toEqual(3);
      expect(cart.cartItems[1].barcode).toEqual('ITEM000003');
      expect(cart.cartItems[1].count).toEqual(3);
      expect(cart.getTotalPrice()).toBe(51);
      expect(cart.getSaveMoney()).toBe(3);
    });
  });
});

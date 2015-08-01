var Cart = require("../../models/cart.js");
var Scanner = require("../../models/scanner.js");

describe("Cart",function() {
  var scan = new Scanner();
  var result = scan.changeForm();
  var cart = new Cart();
  cart.add(result);
  describe("constructor",function() {
    // it("accept the result after scanning",function() {
    //   expect(cart.cartItems[0].barcode).toEqual('ITEM000001');
    //   expect(cart.cartItems[0].count).toEqual(3);
    //   expect(cart.cartItems[1].barcode).toEqual('ITEM000003');
    //   expect(cart.cartItems[1].count).toEqual(3);
    // });
    it("accept the result after scanning",function() {
      expect(cart.cartItems.length).toBe(2);
    });
  });
  describe("function",function() {
    it("After calculating the total price",function() {
      expect(cart.getTotalPrice()).toBe(51);
    });
  });
  describe("function",function() {
    it("computing savings",function() {
      expect(cart.getSaveMoney()).toBe(3);
    });
  });
});

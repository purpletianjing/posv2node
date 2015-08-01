var CartItem = require('../../models/cart-item.js');

describe("CartItem",function() {
  var cartItem = new CartItem('ITEM000001',3);
  cartItem.getItemInfo();
  describe("constructor",function() {
    it("accept barcode and count",function() {
      expect(cartItem.barcode).toBe('ITEM000001');
      expect(cartItem.count).toBe(3);
    });
  });
  describe("_itemInfo",function() {
    it("output itemsInfo",function() {
      expect(cartItem._itemInfo.name).toBe('雪碧');
      expect(cartItem._itemInfo.unit).toBe('瓶');
      expect(cartItem._itemInfo.price).toBe(3);
    });
  });
  describe("function",function() {
    it("output promotioncount",function() {
      expect(cartItem.getPromotionCount()).toBe(2);
      expect(cartItem.getSubTotal()).toBe(6);
    });
  });
  describe("function",function() {
    it("output subTotal",function() {
      expect(cartItem.getSubTotal()).toBe(6);
    });
  });
});

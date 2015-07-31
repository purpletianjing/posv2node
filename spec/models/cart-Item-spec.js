var CartItem = require('../../models/cart-item.js');

describe("CartItem",function() {
  describe("constructor",function() {
    it("accept name",function() {
      var cartItem = new CartItem('ITEM000001',3);
      cartItem.getItemInfo();
      expect(cartItem._itemInfo.name).toBe('雪碧');
      expect(cartItem.getPromotionCount()).toBe(2);
      expect(cartItem.getSubTotal()).toBe(6);
    });
  });
});

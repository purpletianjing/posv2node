var Item = require('../../models/item.js');
var Promotion = require('../../models/promotion.js');
var CartItem = require('../../models/cart-item.js');


describe("CartItem", function() {
    var itemArr = [
      new Item('ITEM000000', '可口可乐', '瓶', 3.00),
      new Item('ITEM000001', '雪碧', '瓶', 3.00),
      new Item('ITEM000002', '苹果', '斤', 5.50),
      new Item('ITEM000003', '荔枝', '斤', 15.00),
      new Item('ITEM000004', '电池', '个', 2.00),
      new Item('ITEM000005', '方便面', '袋', 4.50)
    ];
    var promotionsArr = [
      new Promotion('BUY_TWO_GET_ONE_FREE', [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ])
    ];
    CartItem.setAllItems(itemArr);
    CartItem.setPromotions(promotionsArr);
    cartItem = new CartItem('ITEM000001', 3);



  //cartItem = new CartItem('ITEM000001',3);
  cartItem.getItemInfo();
  describe("constructor", function() {
    it("accept barcode and count", function() {
      expect(cartItem.barcode).toBe('ITEM000001');
      expect(cartItem.count).toBe(3);
    });
  });
  describe("_itemInfo", function() {
    it("output itemsInfo", function() {
      expect(cartItem._itemInfo.name).toBe('雪碧');
      expect(cartItem._itemInfo.unit).toBe('瓶');
      expect(cartItem._itemInfo.price).toBe(3);
    });
  });
  describe("function", function() {
    it("output promotioncount", function() {
      expect(cartItem.getPromotionCount()).toBe(2);
      expect(cartItem.getSubTotal()).toBe(6);
    });
  });
  describe("function", function() {
    it("output subTotal", function() {
      expect(cartItem.getSubTotal()).toBe(6);
    });
  });
});

/**
 * 
 */

function  Bundle ( name, price, quantity, products) {
	
	Product.call(this, name, price, quantity);
	
}


Bundle.prototype = Object.create(Product.prototype);
Bundle.prototype.constructor = Bundle;

Bundle.prototype.factoryBundle = function (products) {
	var name = '';
	var price = 0;
	var quantity = 1;
	for (var i = 0; i < products.length; i++){
		
		name += products[i].getName() + '+';
		price += products[i].getPrice();
	}
	
	var bundle = new Bundle(name, price, qualirt)
}

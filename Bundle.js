/**
 * 
 */

function  Bundle ( name, price, quantity, ) {
	
	Product.call(this, name, price, quantity);
	
}

/*Shop.prototype.factoryBundle = function (products) {
	var name = '';
	var price = 0;
	var quantity = 1;
	for (var i = 0; i < products.length; i++){
		
		name += products[i].getName() + '+';
		price += products[i].getPrice();
		
	}
*/
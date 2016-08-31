/**
 * 
 */

function Shop () {
	

		/*var checkOut1 = new CheckOut;
		var checkOut2 = new Checkout;
		var checkOut3 = new Checkout;

		var checkOuts = [checkOut1, checkOut2, checkOut3];*/
		var products = [];
	
	
	/*get checkOuts() {
		return checkOuts;
	}*/
	this.getProducts = function () {
		return products;
	}
	
	this.setProducts = function (newProduct) {
		products.push(newProduct);
	}
	
}

Shop.prototype.productFactory = function  (name, price, quantity) {
	var product = new Product (name, price, quantity);
	this.setProducts(product);

}

Shop.prototype.factoryBundle = function (products) {
	var name = '';
	var price = 0;
	var quantity = 1;
	for (var i = 0; i < products.length; i++){
		
		name += products[i].getName();
		price += products[i].getPrice();
		
	}
	
	var bundle = new Bundle(name, price, quantity);
	this.setProducts(bundle);
}
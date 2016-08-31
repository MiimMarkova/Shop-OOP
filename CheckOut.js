/**
 * 
 */

function CheckOut () {
	var soldProducts = [];
	var cash = 0;
	var checks = 0;
	
	this.getSoldProducts = function (){
		return soldProducts;
	}
	this.setSoldProducts = function (newProduct){
		soldProducts.push(newProduct);
	}
	
	this.getCash = function () {
		return cash;
	}
	this.setCash = function (newCash) {
		cash += newCash;
	}
	
	this.getChecks = function () {
		return checks;
	}
	this.setChecks = function (newChecks) {
		checks += newChecks;
	}
}
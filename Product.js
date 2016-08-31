/**
 * 
 */



function Product (name, price, quantity){
	
	var __name = name;
	var __price = price;
	var __quality = price;
	
	this.getName = function () {
		return __name;
	}
	this.setName = function (newName) {
		__name = newName;
	}
	this.getPrice = function () {
		return __price;
	}
	this.getQuantity =function (){
		return __quantity;
	}
	this.setQuantiti = function (newQuantity) {
		__quantity = newQuantity;
	}
}
/*class Product {
	
	constructor(name, price, quantity) {
		
		var __name = name;
		var __price = price;
		var __quality = price;
	}
	
	get name() {
		return __name;
	}
	
	set name(newName){
		__name = newName;
	}
	
	get price() {
		return __price;
	}
	get quantity() {
		return __quantity;
	}
	
	set quantity(newQuantity){
		__quantity = newQuantity;
	}
	
	productFactory(){
		
	}

}
*/

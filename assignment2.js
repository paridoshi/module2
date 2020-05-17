var app = angular.module('ShoppingListCheckOff', []);

app.service('ShoppingListCheckOffService', [function() {
	'use strict';
	this.items=[{name:"cookies",qty:25},
		{name:"soap",qty:5},
		{name:"pens",qty:10},
		{name:"books",qty:15},
		{name:"rubberband",qty:20}];
	

	this.bought=[];
	}]);

/*myApp.controller('Ctrl1', ['$scope', 'ShoppingListCheckOffService', function($scope, sharedModels) {
    
    $scope.myBreakfast = ShoppingListCheckOffService.breakfast;
    $scope.myBreakfast = ShoppingListCheckOffService.breakfastNew;
}]);*/
app.controller('ToBuyShoppingController', ['$scope', 'ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService) {

$scope.addToBought=ShoppingListCheckOffService.bought;
$scope.itemsToBuy= ShoppingListCheckOffService.items;
$scope.arrayLength=0;
 $scope.removeItem = function (index) {
                console.log("Row Index: " + index);
		$scope.addToBought.push($scope.itemsToBuy[index]);
		$scope.itemsToBuy.splice(index,1);
		//sharedModels.items.splice(0,1);
		//console.log(sharedModels.items[0]);
	$scope.arrayLength=$scope.itemsToBuy.length;
	console.log($scope.arrayLength);
	//console.log($scope.itemsToBuy.length);

};


}]);

app.controller('AlreadyBoughtShoppingController',['$scope', 'ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService) {

//$scope.itemsbought=[{name:"chocolates",qty:1000}];
$scope.itemsbought=ShoppingListCheckOffService.bought;


}]);

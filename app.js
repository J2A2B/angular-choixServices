var app = angular.module('choix', []);

app.controller('myCtrl', ["$scope",function($scope) {

$scope.chiffre =0;
$scope.total = 0;

$scope.services = [
	{
    	name: 'Web Development',
    	price: 300,
    	active:false
	},{
    	name: 'Design',
    	price: 400,
    	active:false
	},{
    	name: 'Integration',
    	price: 250,
   	 active:false
	},{
    	name: 'Formation',
    	price: 220,
    	active:false
	}
	];

$scope.price = function(){
this.element.active =    !this.element.active;
if (this.element.active === true) {
	
	$scope.chiffre ++;
	$scope.total += this.element.price;
} else{
	$scope.chiffre --;
	$scope.total -= this.element.price;
};
	
};

}]);
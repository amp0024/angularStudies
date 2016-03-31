// var things = 
// // array can contain functions stings, numbers etc.
// 	[1,'2', function(){
// 		alert('Hello!');
// 	}];

// things[2]();

// console.log(things);

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope){

	$scope.name = 'Adam';


}]);
// var things = 
// // array can contain functions stings, numbers etc.
// 	[1,'2', function(){
// 		alert('Hello!');
// 	}];

// things[2]();

// console.log(things);

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout){

	$scope.name = 'Adam';

	// timeout allows me to run a function after a certain amount of time. in this situation 300 miliseconds.
	$timeout(function(){

		$scope.name = 'Everyone';

	}, 3000);


}]);
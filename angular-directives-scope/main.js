var app = angular.module('myApp', []);

app.controller('myController', ['$scope', function ($scope) {
  $scope.val = 0;
  $scope.test = 'hi';
}]);

app.directive('sharedScope', function() {
  return{
    scope: false,
    link: function (scope, elem, attrs) {
      scope.val = 20;
    }
  };
});

app.directive('inheritedScope', function() {
  return{
    scope: true,
    link: function (scope, elem, attrs) {
      scope.val = 25;
    }
  };
});

app.directive('isolatedScope', function(){
  return{
    scope: {},
    link: function(scope, elem, attrs){
      scope.val = 30;
    }
  };
});

app.directive('isolatedScopeTakeTwo', function(){
  return{
    scope: {val:'@'}, // what happens when you change the '@' to '='
    link: function(scope, elem, attrs){
      console.log(scope.val);
      scope.val = 40;
      console.log(scope.val);
    }
  };
});
var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

app.controller('appCtrl', ['$scope', '$http', function ($scope,$http) {
	$scope.users = [];

	$http.get('data.json').success(function(data){
$scope.users = data;
console.log($scope.users);
	});


	$scope.sort = function(keyname){
		$scope.sortKey = keyname;
		$scope.reverse = !$scope.reverse;
	}
}])
// Setting up controller


(function(){

	"use strict"; 
// Referencing the module we already created
	angular
	.module("ngClassifieds")
// Creating controller method and injecting $scope into parameters into annonymous function asociated with controller
	.controller("classifiedsCtrl", function($scope){
// Controller is now tied to our view in HTML by using 'ng-controller="classifiedsCtrl'
// $scope is a special object thats available to us in controllers, and its the glue between controllers and view
	$scope.name = {
		first: "Rua",
		last: "fdfs"
	};

	$scope.message = "Hello, World!";

	});
})();
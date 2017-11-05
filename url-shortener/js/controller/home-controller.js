(function() {
	'use strict';
	angular.module('module.main')
	.controller('HomeController',['$scope', '$state', 'UrlService', HomeController]);
	function HomeController($scope, $state, UrlService){
		
		$scope.originalUrl = "";
		$scope.alias = "";
		$scope.aliasToGet = "";
		$scope.shortUrl = "";
		$scope.quantity = "";

		$scope.msgSucesso = "";

		$scope.put = function(){
			UrlService.put($scope.originalUrl, $scope.alias).then(
				function(response){
					console.log(response);
				});
			
		};

		$scope.getUrl = function(){
			UrlService.getUrl($scope.aliasToGet).then(
				function(response){
					console.log(response);
				});
		};

		$scope.getMoreAccessed = function(){
			UrlService.getMoreAccessed($scope.quantity).then(
				function(response){
					console.log(response);
				});
		};

	}
})();
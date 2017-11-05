(function(){
	'use strict';

	angular.module('genius.service.url', [])

	.factory('UrlService', ['$http', '$q', UrlService]);

	function UrlService($http, $q){
		return {
			put : function(url, alias){
				return $http({
						  method: 'PUT',
						  url: CONFIG_APP.API.SHORTENER.URL.SHORT + "?url=" + url + (alias ? ("&alias="+ alias) : ""),
						  headers: {
						  			'Content-type' : 'application/json',
									}
						}).then (function successFunction(response) {
							return response;
						  }, function errorFunction(response) {
						  	return response;
						  });	
			},

			getUrl : function(alias){
				return $http({
						  method: 'GET',
						  url: CONFIG_APP.API.SHORTENER.URL.RETRIEVE + "?alias=" + alias,
						  headers: {
						  			'Content-type' : 'application/json'
									}
						}).then (function successFunction(response) {
						    return response;
						  }, function errorFunction(response) {
						    return(response);
						  });	
			},

			getMoreAccessed : function(quantity){
				return $http({
						  method: 'GET',
						  url: CONFIG_APP.API.SHORTENER.URL.MORE_ACCESSED + "?alias=" + alias,
						  headers: {
						  			'Content-type' : 'application/json'
									}
						}).then (function successFunction(response) {
						    return response;
						  }, function errorFunction(response) {
						    console.log(response);
						  });	
			} 
		}			
		
	}

})();
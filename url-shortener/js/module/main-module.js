(function() {
	'use strict';
	angular.module('module.main',['ui.router', 'genius.service.url', 'pascalprecht.translate'])
	.config(function ($translateProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
		
		$translateProvider.translations('pt', translations_pt_BR);
		$translateProvider.preferredLanguage('pt');
		$translateProvider.useSanitizeValueStrategy('escape');
		
		//$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise("/home");
		$stateProvider.state('/home', {
			url: "/home",
			views: {
				"indexView": { templateUrl : 'partials/home/home.html' }
			}
		});


	})
})();
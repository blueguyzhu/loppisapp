'use strict';

/* App Module */
/*
 * Square bracket define modules which our module relies on
 */
var phonecatApp = angular.module ('phonecatApp', [
		'ngRoute',
		'phonecatController'
		]);


/*
 * I think provider is also service.
 * so $routeProvider declares the services needed to be injected to config function
 * HOWEVER, provider can NEVER be injected into controller function
 * declares the services needed to be injected to config function
 *
 * providers:
 * 1. create instances of services 
 * 2. expose configuration APIs
 * 
 * e.g. $route is a service, $routeProvider is the related provider.
 *
 */
phonecatApp.config (['$routeProvider',
		function ($routeProvider) {
			$routeProvider.
				when ('/phones', {
					templateUrl: 'partials/phone-list.html',
					controller: 'PhoneListCtrl'
				}).
				when ('/phones/:phoneId', {
					templateUrl: 'partials/phone-detail.html',
					controller: 'PhoneDetailCtrl'
				}).
				otherwise ({
					redirectTo: '/phones'
				});
		}]);

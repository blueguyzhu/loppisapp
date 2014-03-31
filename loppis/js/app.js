'use strict';

var loppisApp = angular.module ('loppisApp', ['ngRoute', 'loppisController']);

loppisApp.config (['$routeProvider', 
		function ($routeProvider) {
			$routeProvider.
				when ('/me', {
					templateUrl: 'partial/me-page.html',
					controller: 'mePageCtrl'
				}).
				when ('/buy', {
					templateUrl: 'partial/buy-list.html',
					controller: 'buyListCtrl'
				}).
				when ('/post', {
					templateUrl: 'partial/post-page.html',
					controller: 'postPageCtrl'
				}).
				otherwise ({
					redirectTo: '/buy'
				});
		}]);

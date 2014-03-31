var phonecatApp = angular.module('phonecatApp', []);	//register a module in phonecatApp
 
/* bind the module with a controller declared in template(html) and associate a function.
 *
 * To use a service in angular, you simply declare the names of 
 * the dependencies(scope, http) you need as arguments to the controller's 
 * constructor function
 *
 * Angular's dependency injector provides services to your controller when 
 * the controller is being constructed. The dependency injector also takes 
 * care of creating any transitive dependencies the service may have 
 * (services often depend upon other services).
 */
/*
function PhoneListCtrl ($scope, $http) {
	$http.get('phones/phones.json').success(function(data) {
		$scope.phones = data;	//phones is a class in PhoneListCtrl
	});

	$scope.orderProp = 'age';
}

PhoneListCtrl.$inject = ['$scope', '$http'];
phonecatApp.controller('PhoneListCtrl', PhoneListCtrl);
*/

phonecatApp.controller ('PhoneListCtrl', ['$scope', '$http',
		function ($scope, $http) {
			$http.get('phones/phones.json').success(function (data) {
				$scope.phones = data;
			});
		}]);

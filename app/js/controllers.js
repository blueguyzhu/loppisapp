'use strict';

/* Controllers */
//register variable phonecatApp as a controller in phonecatApp Module
var phonecatApp = angular.module('phonecatApp', []);
 
/*assign the controller with a name, this name is the same as the name of a derective
 * in the html.
 * So it connects view with module
 *
 * @scope is a prototypical descendant of the root scope. it is available to all bindings 
 * located within the html tag <body ng-controller='PhoneListCtrl'>
 * directive action scope
 */
phonecatApp.controller('PhoneListCtrl', function ($scope) {
	$scope.phones = [
		{'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.', 'age': 1},
		{'name': 'Motorola XOOM™ with Wi-Fi', 'snippet': 'The Next, Next Generation tablet.', 'age': 2},
		{'name': 'MOTOROLA XOOM™', 'snippet': 'The Next, Next Generation tablet.', 'age': 3}
		];

	$scope.name = 'Vein';
	$scope.orderProp = 'age';	//So ng-model can be seens as variables
});

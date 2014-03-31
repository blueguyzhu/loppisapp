'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

	describe('PhoneListCtrl', function(){
		var scope, ctrl, $httpBackedn;

		beforeEach(module('phonecatApp'));

		beforeEach (inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBacked_;
			$httpBackedn.expectGET('phones/phones.json').
				respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

			scope = $rootScope.$new();
			ctrl = $controller('PhoneListCtrl', {$scope: scope});
		}));
	});
});

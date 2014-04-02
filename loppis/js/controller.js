/*root directive*/
var loppisControllers = angular.module ('loppisController', []);
var baseUrl = "http://limitstudio.com/one/";
var prodUrl = baseUrl + "/products/homePage.do?";

loppisControllers.controller('headCtrl', ['$scope', '$http', '$window',
		function ($scope, $http, $window) {
		}
]);

loppisControllers.controller('buyListCtrl', ['$scope', '$http', '$window',
		function ($scope, $http, $window) {
			$scope.page = 0;
			$scope.lai = 0;
			$scope.nextLink = prodUrl + "p=" + $scope.page;
			$scope.nextLink = $scope.nextLink + "&lai=" + $scope.lai;

			$http.get($scope.nextLink).success (function (data) {
				$scope.prods = data.data.ads;
				$scope.lai = data.data.last_aid;
				$scope.page += 1;
			});

			$scope.loadMore = function () {
				$scope.nextLink = prodUrl + "p=" + $scope.page;
				$scope.nextLink = $scope.nextLink + "&lai=" + $scope.lai;

				$http.get($scope.nextLink).success (function (data) {
					$scope.prods.push (data.data.ads);
					$scope.lai = data.data.last_aid;
					$scope.page += 1;
				});
			}
		}
]);


loppisControllers.directive ("buyScrollPosition", ['$window', 
		function ($window) {
		}
]);


loppisControllers.controller('mePageCtrl', ['$scope', '$http',
		function ($scope, $http) {
		}
]);

loppisControllers.controller('postPageCtrl', ['$scope', '$http',
		function ($scope, $http) {
		}
]);


loppisControllers.controller('adDetailCtrl', ['$scope', '$http', '$routeParams',
		function ($scope, $http, $routeParams) {
		}
]);

loppisControllers.controller ('searchCtrl', ['$scope', '$http',
		function ($scope, $http) {
		}
]);

loppisControllers.controller ('footerCtrl', ['$scope', '$http', '$window',
		function ($scope, $http, $window) {
			$scope.buy_btn_img = "img/buy-button-on.png";
			$scope.me_btn_img = "img/me-button-off.png";
			$scope.sell_btn_img = "img/sell-button-off.png";

			$scope.tab_selection = "buy";

			$scope.skipToMe = function () {
				if ($scope.tab_selection != "me") {
					$scope.tab_selection = "me";
					$scope.buy_btn_img = "img/buy-button-off.png"
					$scope.sell_btn_img = "img/sell-button-off.png";
					$scope.me_btn_img = "img/me-button-on.png";
					$window.location.href = "#/me";
				}
			}

			$scope.skipToBuy = function () {
				if ($scope.tab_selection != "buy") {
					$scope.tab_selection = "buy";
					$scope.buy_btn_img = "img/buy-button-on.png"
					$scope.sell_btn_img = "img/sell-button-off.png";
					$scope.me_btn_img = "img/me-button-off.png";
					$window.location.href = "#/buy";
				}
			}

			$scope.skipToSell = function () {
				if ($scope.tab_selection != "sell") {
					$scope.tab_selection = "sell";
					$scope.buy_btn_img = "img/buy-button-off.png"
					$scope.sell_btn_img = "img/sell-button-on.png";
					$scope.me_btn_img = "img/me-button-off.png";
					$window.location.href = "#/post";
				}
			}
		}
]);

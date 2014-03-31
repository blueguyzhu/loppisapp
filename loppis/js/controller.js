/*root directive*/
var loppisControllers = angular.module ('loppisController', []);
var baseUrl = "http://limitstudio.com/one/";
var prodUrl = baseUrl + "/products/homePage.do?";

loppisControllers.controller('buyListCtrl', ['$scope', '$http',
		function ($scope, $http) {
			$scope.page = 0;
			$scope.lai = 0;
			$scope.nextLink = prodUrl + "p=" + $scope.page;
			$scope.nextLink = $scope.nextLink + "&lai=" + $scope.lai;

			$http.get($scope.nextLink).success (function (data) {
				$scope.prods = data;
			});
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

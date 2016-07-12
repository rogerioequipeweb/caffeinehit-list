var app = angular.module('caffeinehit.controllers', []);

app.controller("YelpController", function ($scope, YelpService) {
	$scope.yelp = YelpService;
 
	$scope.doRefresh = function(){
		if (!$scope.yelp.isLoading){
			$scope.yelp.refresh().then(function(){
				$scope.$broadcast('scroll.refreshComplete');
			})
		}
	}

	$scope.loadMore = function(){
		if (!$scope.yelp.isLoading && $scope.yelp.hasMore){
			$scope.yelp.next().then(function(){
				$scope.$broadcast('scroll.infiniteScrollComplete');
			})
		} 
	}

	$scope.getDirections = function(cafe){
		console.log("Getting directions");
	}

	$scope.openMap = function(cafe){
		console.log("Opening cafe in maps app");
	}
});

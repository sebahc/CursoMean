var app = angular.module('StarterApp',['ngMaterial','ngMdIcons']);

app.controller('AppCtrl',['$scope','$mdBottomSheet','$mdSidenav','$mdDialog',function($scope,$mdBottomSheet,$mdSidenav,$mdDialog){

$scope.toggleSidenav=function(menuId){
	$mdSidenav(menuId).toggle();
};

}]);


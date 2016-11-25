var app = angular.module('userApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home/home.html',
      controller : 'homeController',
      controllerAs : 'homeCtrl'
    });
}]);

app.directive('header', function(){
  return {
    restrict : 'A',
    templateUrl: "/partials/common/header.html"
  }
});

app.directive('footer', function(){
  return {
    restrict : 'A',
    templateUrl: "/partials/common/footer.html"
  }
});

app.controller('homeController',['$http', '$scope', function($http, $scope){
  $scope.ajoutUtilisateur = function(){
    $scope.name = dataName;
  }
  dataName = $http.get('http://localhost:3000/api/users');
}]);


app.factory(function(){

});

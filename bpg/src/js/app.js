var movieApp = angular.module('BPGApp', [
  'ngRoute',
  'BPGAppControllers',
  'BPGAppDirectives',
  'moviesServices',
  'movieFilters',
  'ngAnimate',
  'ui.bootstrap'
]);

movieApp.config(['$routeProvider',
  function($routeProvider,$translateProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }).
      when('/portafolio', {
        templateUrl: 'templates/portafolio.html'
        //controller: 'HomeCtrl'
      }).
      when('/movies/:movieId', {
        templateUrl: 'templates/movie-detail.html',
        controller: 'MovieDetailCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });

  }]);
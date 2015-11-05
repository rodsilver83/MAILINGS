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
        controller: 'BPGCtrl'
      }).
      when('/portafolio', {
        templateUrl: 'templates/portafolio.html',
        controller: 'BPGCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
      /*.
      when('/movies/:movieId', {
        templateUrl: 'templates/movie-detail.html',
        controller: 'MovieDetailCtrl'
      })
      */

  }]);
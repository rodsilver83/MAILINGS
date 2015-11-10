var movieApp = angular.module('BPGApp', [
  'ngRoute',
  'BPGAppControllers',
  'BPGAppDirectives',
  'ngAnimate',
  'ui.bootstrap'
]);

movieApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'BPGCtrl'
      }).
      when('/portafolio', {
        templateUrl: 'templates/portafolio.html',
        controller: 'TrackCtrl'
      }).
      when('/por_que_elegirnos', {
        templateUrl: 'templates/por_que_elegirnos.html',
        controller: 'TrackCtrl'
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
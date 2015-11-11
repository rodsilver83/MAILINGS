var movieApp = angular.module('BPGApp', [
  'ngRoute',
  'BPGAppControllers',
  'BPGAppDirectives',
  'ngAnimate',
  'ui.bootstrap',
  'ui.calendar'
]);

movieApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
    when('/home', {
      templateUrl: 'templates/home.html'
    }).
    when('/portafolio', {
      templateUrl: 'templates/portafolio.html'
    }).
    when('/por_que_elegirnos', {
      templateUrl: 'templates/por_que_elegirnos.html'
    }).
    when('/calendario', {
      templateUrl: 'templates/calendario.html',
      controller: 'CalendarCtrl'
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
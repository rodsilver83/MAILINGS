var movieApp = angular.module('BPGApp', [
  'ngRoute',
  'ui.bootstrap',
  'BPGAppControllers',
  'BPGAppDirectives',
  'ngAnimate',
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
    when('/clientes', {
      templateUrl: 'templates/clientes.html'
    }).
    when('/contacto', {
      templateUrl: 'templates/contacto.html',
      controller: 'ContactCtrl'
    }).
    when('/examen', {
      templateUrl: 'templates/examen.html',
      controller: 'ContactCtrl'
    }).
    when('/equipo', {
      templateUrl: 'templates/equipo.html'
    }).
    when('/libreria', {
      templateUrl: 'templates/libreria.html'
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
var BPGAppDirectives = angular.module('BPGAppDirectives', []);

BPGAppDirectives.directive('footer', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/footer.html',
    link: function(scope, element, attrs) {
        $( "#loading-page" ).fadeOut( 2000);
    }
  };
});
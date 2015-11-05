var BPGAppDirectives = angular.module('BPGAppDirectives', []);

BPGAppDirectives
  .directive('footer', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/footer.html',
      link: function (scope, element, attrs) {
        $("#loading-page").fadeOut(1000);
      }
    };
  }).directive('gaTrack', function ($log, $location, $window) {
    return {
    //restrict defaults to A
    restrict: 'A',
    link: function (scope, el, attrs) {
      el.bind('click', function() {
        if(attrs.href ){
          $log.log(attrs.href);
          $window.ga('send', 'pageview', { page: $location.url()+'/'+attrs.href });
        }else{
          $log.log(attrs.gaTrack);
          $window.ga('send', 'pageview', { page: $location.url()+'/'+attrs.gaTrack });
        }
      });

    }
  }
});
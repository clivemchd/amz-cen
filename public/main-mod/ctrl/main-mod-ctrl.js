( function () {
  'use strict'

  module.exports = function (mainMod) {
    mainMod.controller('main-mod-ctrl', [
    '$scope',
    '$document',
    '$timeout'
    , function ($scope, $document, $timeout) {
      $scope.hideUiView = true;

      /**
       * navbar scroll to div
       */
      $scope.navbar = function (eleID) { 
        var getDivByElement = angular.element(document.getElementById(eleID))
        //Timeout adds a delay effect.
        $timeout(function() {
          /* .scrollToElementAnimated( element [, offset, [, duration [, easing ] ] ] ) */         
          $document.scrollToElementAnimated(getDivByElement, 70, 200);       
        }, 500);
      };

      $scope.isloadDone = function () {
        $scope.hideUiView = false;
      }

    }]);
  };

})();
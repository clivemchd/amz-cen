( function () {
  'use strict'

  module.exports = function (mainMod) {
    mainMod.controller('main-mod-ctrl', [
    '$scope',
    '$location'
    , function ($scope, $location) {
      /**
       * navbar values 
       */
      $scope.navbar = function (eleID) {
        console.log("eleID", eleID);
      }

    }])
  }

})()
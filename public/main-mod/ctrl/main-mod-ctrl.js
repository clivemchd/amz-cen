( function () {
  'use strict'

  module.exports = function (mainMod) {
    mainMod.controller('main-mod-ctrl', [
    '$scope'
    , function ($scope) {
      /**
       * navbar values 
       */
      $scope.navbar = function (eleID) {
        console.log("eleID", eleID);
      }

    }])
  }

})()
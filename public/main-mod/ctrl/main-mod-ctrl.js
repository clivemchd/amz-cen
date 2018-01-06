module.exports = function (mainMod) {
  mainMod.controller('main-mod-ctrl', [
  '$scope' 
  , function ($scope) {
      $scope.test = "test"
  }])
}
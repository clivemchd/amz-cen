( function (){
  'use strict'

  var aboutModCtrl = require('./ctrl/about-mod-ctrl.js')

  module.exports = angular.module('amz-cen.about', [])
  .controller("about-mod-ctrl", aboutModCtrl);

})();


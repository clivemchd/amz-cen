( function (){
  'use strict'

  var contactModCtrl = require('./ctrl/contact-mod-ctrl.js')

  module.exports = angular.module('amz-cen.contact', [])
  .controller("contact-mod-ctrl", contactModCtrl);

})();


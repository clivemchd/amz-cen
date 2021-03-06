var angular 						= require('angular');
var ui_router 					= require('angular-ui-router');
var angular_scroll      = require('angular-scroll');

/*************************************************************************
 * Variable Declarations
 *************************************************************************/
var compoPath = './main-mod/components'; 

/*************************************************************************
 * JS files required in Index.js
 *************************************************************************/
var mainModCtrl         = require('./main-mod/ctrl/main-mod-ctrl');
var mainModConfig       = require('./main-mod/config/main-mod-config');
var about               = require(compoPath + '/about/about.js');
var contact             = require(compoPath + '/contact/contact.js'); 


/*************************************************************************
 * baseModules to be injected in main module amz-cen
 *************************************************************************/
var baseModules = [
  'ui.router',
  'duScroll',
   about.name,
   contact.name
]

/*************************************************************************
 * Initializing Application Main Module
 *************************************************************************/
 var mainMod								= angular.module('amz-cen', baseModules);

/*************************************************************************
 * mainMod Controllers
 *************************************************************************/
mainModCtrl(mainMod);


/*************************************************************************
 * core directive
 *************************************************************************/


/*************************************************************************
 * mainMod factory
 *************************************************************************/


/*************************************************************************
 * mainMod Config
 *************************************************************************/
mainModConfig(mainMod);


/*************************************************************************
 * mainMod Run
 *************************************************************************/
mainMod.run([
  '$location'
, function ($location) {
    
}]);
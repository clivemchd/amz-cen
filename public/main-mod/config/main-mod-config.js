module.exports = function (app) {
	app.config(statesFunc)
}

function statesFunc($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.hashPrefix('')
	$stateProvider
	.state('home', state.home)
	
	$urlRouterProvider
	.otherwise('/home')

}

var state = {
	home : {
		url : '/home',
		views: 
		{
			'' : {
				templateUrl : './main-mod/views/home.html',				
			},
			'navbar@home' : {
				templateUrl : './main-mod/views/navbar.html'
			},
			data : {
				requiredLogin : false
			}	
		}	
  }
}
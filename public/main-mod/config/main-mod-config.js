module.exports = function (app) {
	app.config(statesFunc)
}

function statesFunc($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.hashPrefix('');
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	}	);
	$stateProvider
	.state('home', state.home)

	$urlRouterProvider
	.otherwise('/')
}

var state = {
	home : {
		url 	: '/',
		views : 
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
// create the module and name it scotchApp
 angular.module('routeApp', ['ngRoute'])
	// configure our routes
	.config(function($routeProvider) {
		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})
			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	})
	.factory('Users', function ($http) {
	    this.getUsers = function () {	      
	       return $http.get('/Home/GetUsers', { cache: false });
	    };
	    this.getMessage = function () {
	        return 'Diego Aldo Burlando con Bambina Maria';
	    };
	    return this;
	})
    // create the controller and inject Angular's $scope
	.controller('mainController', ['$scope', '$interval', 'Users', function ($scope, $interval, Users) {
	    $scope.users = [];
	    $interval(function () { Users.getUsers().then(function (dataResponse) { $scope.users = dataResponse.data; }); }, 1000);
	    $scope.message = Users.getMessage();
	}])	
	.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	}).
	controller('contactController', function($scope) {
		$scope.message = 'Contact Diego';
	});
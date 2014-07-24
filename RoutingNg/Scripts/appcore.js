// create the module and name it scotchApp
 angular.module('routeApp', ['ngRoute'])
	// configure  routes
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
	.factory('Customers', function ($http) {
	    this.getCustomers = function () {
	       return $http.get('/Home/GetCustomers', { cache: false });
	    };
	    this.getApi = function () {	     
	        return $http.get('/api/restapi/', { cache: false });
	    };
	    this.getMessageHome = function () {
	        return 'Message from Home Page';
	    };
	    this.getMessageAbout = function () {
	        return 'Message from About Page';
	    };
	    this.getMessageContacts = function () {
	        return 'Message from Contact Page';
	    };
	    return this;
	})   
	.controller('mainController', ['$scope', '$interval', 'Customers', function ($scope, $interval, Customers) {
	    $scope.customers = [];
	    $interval(function () { Customers.getCustomers().then(function (dataResponse) { $scope.customers = dataResponse.data; }); }, 1000);
	    $scope.message = Customers.getMessageHome();
	}])	
	.controller('aboutController', ['$scope', 'Customers', function ($scope, Customers) {
	    $scope.message = Customers.getMessageAbout();
	}])
    .controller('contactController', ['$scope','$interval', 'Customers', function($scope,$interval, Customers) {	   
	    $scope.customers = [];
	    $interval(function () { Customers.getApi().then(function (dataResponse) { $scope.customers = dataResponse.data; }); }, 1000);
	    $scope.message = Customers.getMessageContacts();
	}]);
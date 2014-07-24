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
	.factory('Users', function ($http) {
	    this.getUsers = function () {	      
	       return $http.get('/Home/GetUsers', { cache: false });
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
	.controller('mainController', ['$scope', '$interval', 'Users', function ($scope, $interval, Users) {
	    $scope.users = [];
	    $interval(function () { Users.getUsers().then(function (dataResponse) { $scope.users = dataResponse.data; }); }, 1000);
	    $scope.message = Users.getMessageHome();
	}])	
	.controller('aboutController',['$scope','Users', function($scope, Users) {
	    $scope.message = Users.getMessageAbout();
	}])
    .controller('contactController', ['$scope','$interval', 'Users', function($scope,$interval, Users) {	   
	    $scope.users = [];
	    $interval(function () { Users.getApi().then(function (dataResponse) { $scope.users = dataResponse.data; }); }, 1000);
	    $scope.message = Users.getMessageContacts();
	}]);
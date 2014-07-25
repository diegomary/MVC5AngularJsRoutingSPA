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
			})
	        // route for the contact page
		    .when('/postcustomer', {
		        templateUrl : 'pages/postcustomer.html',
		        controller  : 'postCustomerController'
		    });
	})
	.factory('Customers', function ($http) {
        // Basic Authentication enforcement
	    var authInfo  = "username:password";
	    var encodedData = window.btoa(authInfo);
	    $http.defaults.headers.common.Authorization = "Basic " + encodedData;
        //**********************************************************************
	    this.getCustomers = function () {
	       return $http.get('/Home/GetCustomers', { cache: false });
	    };
	    this.getApi = function () {	     
	        return $http.get('/api/restapi/', { cache: false });
	    };
	    this.postCustomer = function (dataTosend) {
	        var ret;
	       // return $http.post('/api/restapi/Post', dataTosend, { cache: false }).then(function (response) { alert(JSON.stringify(response)); });
            // Here follows the long sintax that can be inserted in a controller rather than in a factory
	        return $http({
	            method: 'POST',
	            url: '/api/restapi/Post',
	            data: dataTosend,
	            headers: { 'Content-Type': 'application/json; charset=utf-8' },
	        }).
	               success(function (data, status, headers, config) {
	                   ret = status;
	               }).
	               error(function (data, status, headers, config) {
	                   ret = status;
	               }).then(function (response) {alert(ret); });
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
	    this.getMessagePostCustomer = function () {
	        return 'Posting a Customer entity to a Rest Web Api';
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
    }])
    .controller('postCustomerController', ['$scope','$http', 'Customers', function ($scope,$http, Customers) {
        $scope.message = Customers.getMessagePostCustomer();
        $scope.save = function (customer) {  Customers.postCustomer(customer);};
        $scope.reset = function () {  };
    }]);